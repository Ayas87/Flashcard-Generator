class ClozeCard {
    constructor(text,cloze){
        this.text = text;
        this.cloze = cloze;
    }

    printCloze(){
        return this.cloze;
    }
    printPartial(){
        console.log(this.text);
    }
    printFull(){
        console.log(this.cloze + ' ' + this.text);
    }
    printError(){
        if(this.cloze === undefined) {
            console.log('There is no cloze, please try again.');
        }
    }
}

module.exports = ClozeCard;