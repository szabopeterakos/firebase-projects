console.log("WEIGHT0WS API STARTING...");
require("dotenv").config();
const ENV = process.env;

const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

/* Database */

const uri = ENV.DATABASE;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

/* Express */

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.json({
    inflate: true,
    limit: "100kb",
    reviver: null,
    strict: true,
    type: "application/json",
    verify: undefined,
  })
);

const PORT = ENV.PORT;
app.listen(PORT, () => {
  console.log(`📘 Listening on port: ${PORT}`);
});

/* Routes */

app.use("/", routes);
