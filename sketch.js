var tileSize= 50;
var hvidebrikker = [];
var hvidebrikker2 = [];
var sortebrikker = [];
var sortebrikker2 = [];


function setup() {
    createCanvas(400, 400);
    for (var i = 0; i < 8; i++){
      hvidebrikker.push(new Brik(i, 0, true));
      hvidebrikker2.push(new Brik(i, 1, true));
      sortebrikker.push(new Brik(i, 7, true));
      sortebrikker2.push(new Brik(i, 6, true));
    }
}

function draw() {
    background(100);
    spilleplade();

    for (var i = 0; i < hvidebrikker.length; i++){
      isWhite = true;
      hvidebrikker[i].render();
      hvidebrikker2[i].render();
    }

    for (var i = 0; i < sortebrikker.length; i++){
      isWhite = false;
      sortebrikker[i].render();
      sortebrikker2[i].render();
    }
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
