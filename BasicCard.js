class BasicCard {
    constructor(front,back){
        this.front = front;
        this.back = back;
    }
    
    printFront(){
        console.log(this.front);
    }
    printBack(){
        console.log(this.back);
    }
}

module.exports = BasicCard;