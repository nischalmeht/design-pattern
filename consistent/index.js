import { getValueThatMightBeCachedAsync } from "./asyncFetchData.js";
import { getValueThatMightBeCached } from "./fetchData.js";
import { getValueThatMightBeCachedSync } from "./syncFetchData.js";

function createDataWatcher(key) {
  let watchers = [];

  // This tries to get data, but might be async or sync depending on `key` usage
  getValueThatMightBeCachedAsync(key, (result) => {
    watchers.forEach((fn) => fn(result));
  });

  return {
    onReady: (fn) => watchers.push(fn),
  };
}

// Example usage
const watcher1 = createDataWatcher("myKey");
watcher1.onReady((data) => {
  console.log("Watcher1 got:", data);

  // We do a second watch
  const watcher2 = createDataWatcher("myKey");
  watcher2.onReady((data2) => {
    console.log("Watcher2 got:", data2);
  });
});
