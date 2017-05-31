const BasicCard = require('./BasicCard.js');
const ClozeCard = require('./ClozeCard.js');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');




const firstPresident = new BasicCard('Who was the first president of the United States?','George Washington');
const firstPresidentCloze = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');

// Define the port to run on
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
});

app.get('/data',function(req, res) {
    res.json(firstPresident);
});