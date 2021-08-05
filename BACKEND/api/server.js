const express = require('express');
const app = express();
const cors = require("cors")
app.use(cors())
const  countriesData  = require('./countriesData.json');
const port = 8000;

app.get('/all', cors(), (req, res) => {
  res.app("")
})

app.get('/search',(rep,res)=>{
  


  for (let i = 0; i < countriesData.length; i++) {
    const element = countriesData[i];
  }

  res.json({
    
  })

})

app.listen(port, () => {
  console.log('server started on port:' + port);
})


