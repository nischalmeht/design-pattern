export class CancelError extends Error {
  constructor() {
    super("Async Operation was canceled.");
    this.name = "CancelError";
  }
}
