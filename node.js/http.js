const http = require("http");

const sever = http.createServer((request, respose) => {
  console.log(request);
  respose.write("hello there user");
  respose.end();
});

sever.listen(3000, () => console.log("Server is running"));
