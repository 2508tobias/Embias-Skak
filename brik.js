class Brik {
    constructor(x, y, isWhite, isSelected) {
        this.matrixPos = createVector(x, y);
        this.pixelPos = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
        this.white = isWhite;
        this.sel = isSelected;
    }

    // show(){
    //     Text(this.letter, this.pixelPos.x, this.pixelPos.y);
    // }
    render() {

        if (this.sel) {
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
    }
}