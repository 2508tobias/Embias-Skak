class Brik {
    constructor(x, y, isWhite, isSelected, letter) {
        this.matrixPos = createVector(x, y);
        this.pixelPos = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
        this.white = isWhite;
        this.sel = isSelected;
        this.letter = letter;

    }
    
    render() {
        if (this.sel) {
            // let img;
            // img = loadImage("1");
            // imageMode(CENTER);
            // image(img, this.pixelPos.x, this.pixelPos.y);
            circle(this.pixelPos.x, this.pixelPos.y, tileSize * 0.75);
        } else {
            if (this.white) {
                fill(255, 0, 0);
            }
            if (!this.white) {
                fill(0, 0, 255)
            }
        }

        circle(this.pixelPos.x, this.pixelPos.y, tileSize * 0.5);
        // push();
        // fill(0, 255, 255);
        // textAlign(CENTER, CENTER);
        // text(this.letter, this.pixelPos.x, this.pixelPos.y);
        // pop();
    }
}