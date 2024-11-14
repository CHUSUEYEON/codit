const express = require("express");
const controller = require("../controller/index");
const router = express.Router();

router.post("/files", controller.postFile);
router.get("/files", controller.getFiles);

module.exports = router;
