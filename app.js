const express = require('express');
const app = express();
const port = 3000;
const db = require('./models');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const bookRouter=require('./routes/book')
app.use('/',bookRouter)

const authorRouter=require('./routes/author')
app.use('/',authorRouter)

db.sequelize.sync().then((res) => {

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })

})