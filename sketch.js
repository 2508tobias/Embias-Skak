var tileSize = 50;
var hvidebrikker = [];
var hvidebrikker2 = [];
var sortebrikker = [];
var sortebrikker2 = [];
var testbrikker = [];


function setup() {
    createCanvas(400, 400);
    for (var i = 0; i < 8; i++){
      hvidebrikker.push(new Brik(i, 0, true, ));
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
      isSelected = false;
      hvidebrikker[i].render();
      hvidebrikker2[i].render();
    }

    for (var i = 0; i < sortebrikker.length; i++){
      isWhite = false;
      isSelected = true;
      sortebrikker[i].render();
      sortebrikker2[i].render();
    }
    mouse();
    mouseClicked();
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

function mouseClicked(){
  let selectPosX = Math.round(map(mouseX, 0, 400, 0, 7));
  let selectPosY = Math.round(map(mouseY, 0, 400, 0, 7));
 
  for (var i = 0; i < hvidebrikker.length; i++){
    if(hvidebrikker[i].matrixPos.y == selectPosX){
      hvidebrikker[i].isSelected = true;
    }
  }

  console.log(Math.round(map(mouseX, 0, 400, 0, 7)), Math.round(map(mouseY, 0, 400, 0, 7)));
}

function mouse(){
  let coordmouseX = map(mouseX, 0, 400, 0, 7);
    let coordmouseY = map(mouseY, 0, 400, 0, 7);
    let matmouseX = Math.round(coordmouseX);
    let matmouseY = Math.round(coordmouseY);
    fill(255, 255, 0);
    circle((matmouseX * tileSize) + tileSize / 2 , (matmouseY * tileSize) + tileSize / 2, 10);
}