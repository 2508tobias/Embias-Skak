var tileSize = 50;
var hvidebrikker = [];
var hvidebrikker2 = [];
var sortebrikker = [];
var sortebrikker2 = [];
var testbrikker = [];

function setup() {
    createCanvas(400, 400);
    for (var i = 0; i < 8; i++){
      hvidebrikker.push(new Brik(i, 0, true, false));
      hvidebrikker2.push(new Brik(i, 1, true, false));
      sortebrikker.push(new Brik(i, 7, false, false));
      sortebrikker2.push(new Brik(i, 6, false, false));
    }
}

function draw() {
    background(100);
    spilleplade();
    for (var i = 0; i < hvidebrikker.length; i++){
      // isWhite = true;
      // isSelected = false;
      hvidebrikker[i].render();
      hvidebrikker2[i].render();
    }

    for (var i = 0; i < sortebrikker.length; i++){
      isWhite = false;
      isSelected = false;
      sortebrikker[i].render();
      sortebrikker2[i].render();
    }
    mouse();
    
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
    if(hvidebrikker[i].matrixPos.x == selectPosX && hvidebrikker[i].matrixPos.y == selectPosY && hvidebrikker[i].sel == false){
      hvidebrikker[i].sel = true;
    }
    if(hvidebrikker2[i].matrixPos.x == selectPosX && hvidebrikker2[i].matrixPos.y == selectPosY){
      hvidebrikker2[i].sel = true;
    }
    if(sortebrikker[i].matrixPos.x == selectPosX && sortebrikker[i].matrixPos.y == selectPosY){
      sortebrikker[i].sel = true;
    }
    if(sortebrikker2[i].matrixPos.x == selectPosX && sortebrikker2[i].matrixPos.y == selectPosY){
      sortebrikker2[i].sel = true;
    }
    // if(hvidebrikker[i].matrixPos.x == selectPosX && hvidebrikker[i].matrixPos.y == selectPosY && hvidebrikker[i].sel == true){
    //   hvidebrikker[i].sel = false;
    // }
  }
  console.log(hvidebrikker);
}

function mouse(){
  let coordmouseX = map(mouseX, 0, 400, 0, 7);
    let coordmouseY = map(mouseY, 0, 400, 0, 7);
    let matmouseX = Math.round(coordmouseX);
    let matmouseY = Math.round(coordmouseY);
    fill(255, 255, 0);
    circle((matmouseX * tileSize) + tileSize / 2 , (matmouseY * tileSize) + tileSize / 2, 10);
}