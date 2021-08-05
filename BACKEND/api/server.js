


const express = require('express');
const app = express();
const cors = require("cors")
app.use(cors())
const  countriesData  = require('./countriesData.json');
const port = 8000;

app.get('/all', (req, res) => {
  console.log('countriesData', countriesData);
  res.send(countriesData);
})



app.listen(port, () => {
  console.log('server started on port:' + port);
})


