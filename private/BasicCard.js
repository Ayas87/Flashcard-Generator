class BasicCard {
    constructor(front,back){
        this.front = front;
        this.back = back;
    }
    front(){
        console.log(this.front);
    }
    back(){
        console.log(this.back);
    }
}

module.exports = BasicCard;