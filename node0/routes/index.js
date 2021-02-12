const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");

router.get("/", mainController.getSome);
router.get("/:id", mainController.getSome);
router.get("/go/:id", mainController.redirect);
router.post("/:id", mainController.handlePOST);

module.exports = router;
