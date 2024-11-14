const express = require("express");
const app = express();
const PORT = 8080;
const indexRouter = require("./routes");
const db = require("./models");
const serverPrefix = "/api";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(serverPrefix, indexRouter);

db.sequelize.sync({ force: false }).then((result) => {
  // console.log(result);
  console.log("DB연결 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
