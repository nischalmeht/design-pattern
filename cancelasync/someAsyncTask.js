export function someAsyncTask(id) {
  console.log(`Async task with id=${id} is started.`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Async task with id=${id} is done.`);
      resolve(`Result of task<${id}>: blablabla`);
    }, 200);
  });
}
