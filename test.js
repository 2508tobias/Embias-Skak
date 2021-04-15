var squareSize = 50;


function setup() {
    createCanvas(400, 400);

}


function draw() {
    background(100);
    let coordmouseX = map(mouseX, 0, 400, 0, 7);
    let coordmouseY = map(mouseY, 0, 400, 0, 7);
    let matmouseX = Math.round(coordmouseX);
    let matmouseY = Math.round(coordmouseY);
    circle((matmouseX * squareSize) + squareSize / 2 , (matmouseY * squareSize) + squareSize / 2, 30);
}