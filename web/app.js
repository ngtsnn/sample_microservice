const path = require("path");
const express = require('express');
const {conn} = require("./db");
const exphbs = require('express-handlebars');
const axios = require("axios");


const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json({}));


app.engine('hbs', exphbs({
  extname: 'hbs',
}));
app.set('view engine', 'hbs');

conn();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.render("sites/index");
});

app.post('/', async (req, res) => {
  const squarefeet = req.body["squarefeet"] || 0;
  let prediction = 0
  const api = (process.env.RSAPI || "http://127.0.0.1:8000") + `/predict?squarefeet=${squarefeet}`;
  console.log(api)
  try {
    const {data} = await axios.get(api);
    res.render("sites/index", {
      squarefeet,
      price: data.prediction
    });
  } catch (error) {
    res.status(500).send("Lỗi dự đoán rồi!!!!")
  }
  
})


app.listen(port, () => console.log(`App is running at http://127.0.0.1:${port} !`));