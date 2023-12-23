const express = require("express");
const env = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.listen(process.env.PORT, function () {
  console.log("Server listening on", process.env.PORT);
});
