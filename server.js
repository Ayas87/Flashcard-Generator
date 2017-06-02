const BasicCard = require('./private/BasicCard.js');
const ClozeCard = require('./private/ClozeCard.js');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// Define the port to run on
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'private')));
// Listen for requests
const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
});

function appendBasic (param) {
    fs.appendFileSync('private/cards/basic/basic.json',JSON.stringify(param) + '\n','utf8');
    console.log(param);
}

function appendCloze (param) {
    fs.appendFileSync('private/cards/cloze/cloze.json',JSON.stringify(param) + ',','utf8');
    console.log(param);
}

//Make Cards
app.post('/', urlencodedParser,  (req, res)=> {
  if (!req.body){
     return res.sendStatus(400);   
  }
  if(req.body.front) {
    const basicCard = new BasicCard(req.body.front, req.body.back);
    appendBasic(basicCard);
    res.send(basicCard);
  } else if (req.body.text) {
    const clozeCard = new ClozeCard(req.body.text, req.body.cloze);
    appendCloze(clozeCard);
    res.send(clozeCard);
  }
});

// //Return Cards
app.get('/private/cards/',(req,res)=>{
  let response = fs.readFile('private/cards/basic/basic.json', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data)
    res.send(data);
  });
  // console.log(response);
  
    // console.log('get request was made' + res);
});