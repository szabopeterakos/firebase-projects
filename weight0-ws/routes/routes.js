const express = require("express");
const app = express.Router();

require("../models/Weight");

const userController = require("./../controllers/userController");

/* User endpoints */

app.get("/records", userController.getAllWeightRecords);
app.post("/records", userController.createWeightRecord);
app.delete("/records", userController.deleteRecord);

/* Export */

module.exports = app;
