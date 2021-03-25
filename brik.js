class Brik {
    constructor(x, y, isWhite, letter){
        this.matrixPos = createVector(x, y);
        this.pixelPos = createVector(x * tileSize + tileSize / 2, y* tileSize + tileSize / 2);
    }


    render() {
        if(isWhite == true) {
            fill(255, 204, 0);
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

