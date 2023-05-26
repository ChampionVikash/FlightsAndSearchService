const express = require("express");

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {

   // create the express object
 const app = express();
 const PORT = 3000;
 app.listen(PORT, () => {
  console.log(`Servr started at ${PORT} `);
  console.log(process.env);
 });
}

setupAndStartServer();