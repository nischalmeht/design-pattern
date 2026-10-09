import { CancelError } from "./cancelError.js";

export function createAsyncCancelable(generator) {
  return function asyncCancelable(...args) {
    // Call the provided generator function with all arguments.
    // This gives us a "generatorObj" which we can step through using .next() and .throw().
    const generatorObj = generator(...args);

    // A flag to track if cancellation has been requested.
    let reqCanceled = false;

    // The "cancel" function just sets the flag, so we know to stop.
    function cancel() {
      reqCanceled = true;
    }

    // We return a promise that represents the entire async operation.
    // We'll resolve it when the generator finishes, or reject if there's an error or cancellation.
    const promise = new Promise((resolve, reject) => {
      // "nextYield" advances the generator's execution.
      // "prevResult" is what we got from the last generator step (.next() or .throw()).
      async function nextYield(prevResult) {
        // Check if a cancellation was requested. If so, we reject with a CancelError.
        if (reqCanceled) {
          return reject(new CancelError());
        }

        // If the generator says "done", it means we reached the end of the sequence.
        // We then resolve the promise with the final value.
        if (prevResult.done) {
          return resolve(prevResult.value);
        }

        // If not done, we try to process the next step.
        try {
          // prevResult.value might be a promise, so we await it.
          // Then we call generatorObj.next(...) with that awaited value to get the next step.
          nextYield(generatorObj.next(await prevResult.value));
        } catch (err) {
          // If an error happens when calling .next(), we try to handle it by calling .throw(err) on the generator.
          try {
            nextYield(generatorObj.throw(err));
          } catch (err2) {
            // If the generator itself can't handle the error, we reject the promise.
            reject(err2);
          }
        }
      }

      // Start the process by calling nextYield with an empty object as the initial step.
      // The generator will then proceed from its first yield.
      nextYield({});
    });

    // The returned object contains:
    // - "promise": the main promise for the async operation.
    // - "cancel": a function to request cancellation at any time.
    return { promise, cancel };
  };
}
