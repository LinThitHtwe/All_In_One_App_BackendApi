const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routers/index");

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:8081",
//     credentials: true,
//   })
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router);
require("./config/db")();
app.listen(process.env.PORT, function () {
  console.log("Server listening on", process.env.IP_ADDRESS, process.env.PORT);
});
