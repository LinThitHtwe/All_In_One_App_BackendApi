const express = require("express");
const env = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routers/index");

const app = express();

require("./config/db")();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router);
app.listen(process.env.PORT, function () {
  console.log("Server listening on", process.env.PORT);
});
