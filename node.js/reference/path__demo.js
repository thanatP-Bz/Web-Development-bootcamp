const path = require("path");

//base file name
console.log(__filename);

//Dirrctory name
console.log(path.dirname(__filename));

console.log(path.extname(__filename));
//Create path object
console.log(path.parse(__filename).base);

//concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
