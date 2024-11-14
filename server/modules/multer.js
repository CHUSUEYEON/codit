const multer = require("multer");
const path = require("path");

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "application/pdf") {
    const error = new Error(
      "허용하지 않는 파일 형식입니다. \n허용 확장자: .pdf"
    );
    error.code = "INCORREC_FILETYPE";
    return cb(error, false);
  }
  cb(null, true);
};

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },

    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = uploadDetail;
