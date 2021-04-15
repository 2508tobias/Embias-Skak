class Brik {
    constructor(x, y, isWhite, letter){
        this.matrixPos = createVector(x, y);
        this.pixelPos = createVector(x * tileSize + tileSize / 2, y* tileSize + tileSize / 2);
        this.letter = letter;
    }

    // show(){
    //     Text(this.letter, this.pixelPos.x, this.pixelPos.y);
    // }
    render() {
        if(isWhite == true) {
            fill(255, 0 , 0);
        } else {
            fill(0, 204, 255);
        }
        if(isWhite == true) {
            circle(this.pixelPos.x, this.pixelPos.y, 30);
        
        } else {
            circle(this.pixelPos.x, this.pixelPos.y, 30);
        }
        
        
    }
}

class Konge extends Brik {
    constructor(x, y, isWhite, letter){
        this.letter = "K";
    }  
}