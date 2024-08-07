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

// =====================================================================================

//rest operator

// function array(...args) {
//   return args;
// }
// console.log(array(1, 1, 2, 2, 4444));

// =================================================================================================
//promise

// const promise=new Promise((resolve,reject)=>{
// reject()
// })

// promise.then(()=>{
//   console.log("success")
// }).catch(()=>{
//   console.log("failed")
// })

// ==================================================================================

// const http = require("http");

// function request(req, res) {
//   console.log(req.url, req.method, req.headers);
//   res.write("sujitha");
//   res.end()
// }
// const server = http.createServer(request);

// server.listen(8003);

// ===============================================================================

// express js basic in node js

// const http = require("http");
// const express = require("express");

// const app = express();
// app.use((res, req, next) => {
//   console.log("first");
//   next();
// });

// app.use((res, req) => {
//   console.log("second");
// });

// const server = http.createServer(app);
// server.listen(8008);

// ==========================================================================

// how to createserver without using http core modules

// const express = require("express");

// const app = express();
// app.use((req,res, next) => {
//   console.log("first");
//   next();
// });

// app.use((req,res) => {
//   console.log("second");
//   res.send("Welcome to Node.js")
// });

// app.listen(3008);
