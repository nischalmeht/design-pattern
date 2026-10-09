import { CancelError } from "./cancelError.js";

export function createCancalable() {
  let reqCanceled = false;
  function cancel() {
    reqCanceled = true;
  }

  function cancelWrapper(func, ...args) {
    if (reqCanceled) {
      return Promise.reject(new CancelError());
    }
    return func(...args);
  }

  return { cancelWrapper, cancel };
}
