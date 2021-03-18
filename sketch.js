var tileSize= 50;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100);
    spilleplade();
}

function spilleplade(){
        for (var i = 0; i < 8; i++) {
          for (var j = 0; j < 8; j++) {
            if ((i + j) % 2 == 1) {
              fill(0);
            } else {
              fill(240);
            }
            noStroke();
            rect(i * tileSize, j * tileSize, tileSize, tileSize);
      
          }
        }
      }
