const { File } = require("../models");

// POST /api/files
exports.postFile = async (req, res) => {
  console.log(req.body);
  try {
    const { title } = req.body;
    const pdfPath = req.file.path;
    await File.create({
      title,
    }).then((result) => {
      console.log("등록 : ", result);
      console.log("file 정보 : ", req.file);
      res.json({ pdfPath, title });
    });
  } catch (error) {
    console.error(error);
    res.send("SERVER ERROR");
  }
};

// GET /api/files
exports.getFiles = async (req, res) => {
  try {
    const files = await File.findAll();
    console.log(files);
    res.send("Get files SUCCESS");
  } catch (error) {
    console.log(error);
    res.send("SERVER ERROR");
  }
};
