const express = require("express");
const cors = require("cors");
const date = require("./date/date.json");

const app = express();
app.use(cors());
function getRandomBook(){
  const randomIndex = Math.floor(Math.random() * date.length);
  const randomBook = date[randomIndex];
  return randomBook;
}
app.get("/randomBook", (req, res) => {
  
  res.json(getRandomBook());
});
app.get('/randomBookDel', (req,res) => {
  setTimeout(() => {
    res.json(getRandomBook());
  },2000)
})
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
