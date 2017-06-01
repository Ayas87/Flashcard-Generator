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
// Listen for requests
const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
});

function appendBasic (param) {
    const options = {
        encoding: 'utf8',
    };
    fs.appendFileSync('private/cards/basic/basic.json',JSON.stringify(param) + '\n',[options]);
    console.log(param);
}

function appendCloze (param) {
    const options = {
        encoding: 'utf8',
    };
    fs.appendFileSync('private/cards/cloze/cloze.json',JSON.stringify(param) + '\n',[options]);
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
app.get('/',(req,res)=>{
  console.log(res.body);
  console.log('get request was made');
  res.send(console.log('this is my data'));
})