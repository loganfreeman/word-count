var randomWords = require("random-words");

const fs = require("fs");

let len = 1000000;

while (len > 0) {
  len--;
  fs.appendFileSync(
    "message.txt",
    randomWords({ min: 100, max: 200 }).join(" ").toString()
  );
}
