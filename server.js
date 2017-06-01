const BasicCard = require('./BasicCard.js');
const ClozeCard = require('./ClozeCard.js');
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
// Listen for requests
const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
});

function appendBasic (param) {
    const options = {
        encoding: 'utf8',
    };
    fs.appendFileSync('basic.json',JSON.stringify(param) + '\n',[options]);
    console.log(param);
}

function appendCloze (param) {
    const options = {
        encoding: 'utf8',
    };
    fs.appendFileSync('cloze.json',JSON.stringify(param) + '\n',[options]);
    console.log(param);
}

//Basic Card
app.post('/', urlencodedParser, function (req, res) {
  if (!req.body){
     return res.sendStatus(400);   
  }
  const basicCard = new BasicCard(req.body.front, req.body.back);
  appendBasic(basicCard);
  res.send(basicCard);
});
//Cloze Card
app.post('/', urlencodedParser, function (req, res) {
  if (!req.body){
     return res.sendStatus(400);   
  }
  const clozeCard = new ClozeCard(req.body.front, req.body.back);
  appendCloze(clozeCard);
  res.send(clozeCard);
});