class ClozeCard {
    constructor(text,cloze){
        if(text.search(cloze) === -1){ //Checks if the cloze is in the text string
            return console.log('There is no valid Cloze, please try again.')
        } else {
            this.full = text;
            this.cloze = cloze;
            this.partial = text.replace(cloze, '...');
        }
    }
}

module.exports = ClozeCard;