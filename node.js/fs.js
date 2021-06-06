///frist we have to require file
const fs = require("fs");

///how to create file
/* fs.writeFile("message.txt", "hello there node", (err) => {
  if (err) throw err;

  console.log("file has been written");
});

console.log("hello"); */

//how to read file
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
