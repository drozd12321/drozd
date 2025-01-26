const express = require("express");
const cors = require("cors");
const date = require("./date/date.json");

const app = express();
app.use(cors());
app.get("/randomBook", (req, res) => {
  const randomIndex = Math.floor(Math.random() * date.length);
  const randomBook = date[randomIndex];
  res.json(randomBook);
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
