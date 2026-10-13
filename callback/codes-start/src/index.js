function toSecretString(str) {
  return str.replace(/[a-zA-Z]/g, "*");
}

var secret = toSecretString("Super secret key");

console.log(secret);

console.log("end");
