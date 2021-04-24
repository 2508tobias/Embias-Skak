class Brik {
    constructor(x, y, isWhite, letter, isSelected){
        this.matrixPos = createVector(x, y);
        this.pixelPos = createVector(x * tileSize + tileSize / 2, y* tileSize + tileSize / 2);
        this.letter = letter;
    }

    // show(){
    //     Text(this.letter, this.pixelPos.x, this.pixelPos.y);
    // }
    render() {

        if(isSelected == true) {
            fill(0, 255, 0);
        } else {
            if(isWhite == true) {
                fill(255, 0 , 0);
            } else {
                fill(0, 204, 255);
            }
        }
        

        
        circle(this.pixelPos.x, this.pixelPos.y, 30);
        
        
        
    }
}

class Konge extends Brik {
    constructor(x, y, isWhite, letter){
        this.letter = "K";
    }  
}