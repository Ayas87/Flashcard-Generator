const BasicCard = require('./BasicCard.js');
const ClozeCard = require('./ClozeCard.js');
const express = require('express');
const app = express();
const firstPresident = new BasicCard('Who was the first president of the United States?','George Washington');
const firstPresidentCloze = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');

// firstPresident.front();
// firstPresident.back();

// firstPresidentCloze.printCloze();
// firstPresidentCloze.printFull();



// app.set('port',process.env.PORT || 3000);
// app.get('/',function(req,res){
//     res.send('Express is working');
// });

// app.listen(app.get('port'),function(){
//     console.log('Express started press Ctrl + C to terminate')
// });

app.get('/',function(req,res){
    res.send('hello world');
});

app.listen(3000, function() {
    console.log('example app listening on port 3000!');
});