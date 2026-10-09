import { CancelError } from "./cancelError.js";
import { someAsyncTask } from "./someAsyncTask.js";

function throwIfCancelled(cancel) {
  if (cancel.reqCanceled) {
    throw new CancelError();
  }
}

async function cancelableFunction(cancel) {
  const result1 = await someAsyncTask("1");
  console.log(result1);
  throwIfCancelled(cancel);

  const result2 = await someAsyncTask("2");
  console.log(result2);
  throwIfCancelled(cancel);

  const result3 = await someAsyncTask("3");
  console.log(result3);
}

const cancel = { reqCanceled: false };

cancelableFunction(cancel).catch((err) => {
  if (err instanceof CancelError) {
    console.log("Function was canceled.");
  } else {
    console.error(err);
  }
});

setTimeout(() => {
  cancel.reqCanceled = true;
}, 400);
