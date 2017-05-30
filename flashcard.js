BasicCard = require('./BasicCard.js');
ClozeCard = require('./ClozeCard.js');

let firstPresident = new BasicCard('Who was the first president of the United States?','George Washington');
let firstPresidentCloze = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');

// console.log(firstPresident.front);
// console.log(firstPresident.back);

// firstPresidentCloze.printCloze();
firstPresidentCloze.printFull();