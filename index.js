// const express = require("express");
// const app = express();
// const port = 8080;

// Sample GET API
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello, world!" });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//rest operator

// function array(...args) {
//   return args;
// }
// console.log(array(1, 1, 2, 2, 4444));

//promise

// const promise=new Promise((resolve,reject)=>{
// reject()
// })

// promise.then(()=>{
//   console.log("success")
// }).catch(()=>{
//   console.log("failed")
// })

const http = require("http");

function request(req, res) {
  console.log(req.url, req.method, req.headers);
}
const server = http.createServer(request);

server.listen(8003);
