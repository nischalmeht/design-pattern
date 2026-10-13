function delay(sec, callback) {
  setTimeout(callback, sec * 1000);
}

console.log("Starting delays...");

delay(2, () => {
  console.log("2 seconds.");
  delay(1, () => {
    console.log("3 seconds");
    delay(1, () => {
      console.log("4 seconds.");
    });
  });
});

// function toSecretString(str, finish) {
//   process.nextTick(() => {
//     finish(null, str.replace(/[a-zA-Z]/g, "*"));
//   });
// }

// toSecretString("Super secret key", (err, secret) => {
//   if (err) console.log(err);
//   console.log(secret);
// });

// console.log("end");
