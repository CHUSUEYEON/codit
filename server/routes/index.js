const express = require("express");
const controller = require("../controller/index");
const router = express.Router();
const multer = require("../modules/multer");

router.post("/files", multer.single("file"), controller.postFile);
router.get("/files", controller.getFiles);

module.exports = router;
