const express = require("express");
const indexRouter = require("./routes");
const db = require("./models");
const cors = require("cors");

const app = express();
const PORT = 8080;
const serverPrefix = "/api";

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

// 라우팅
app.use(serverPrefix, indexRouter);

db.sequelize.sync({ force: false }).then((result) => {
  // console.log(result);
  console.log("DB연결 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
