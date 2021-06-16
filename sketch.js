var fixedRect, movingRect;
var box

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box = createSprite(100, 100, 50, 50);
  box.shapeColor = "green";
  box.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(fixedRect, movingRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

if(isTouching(box,movingRect)){
  movingRect.shapeColor = "red;"
  box.shapeColor = "red";
}
else{
 movingRect.shapeColor = "green";
 box.shapeColor = "green";
}

  drawSprites();
}

function isTouching(P1,P2){
  if (P2.x - P1.x < P1.width/2 + P2.width/2
    && P1.x - P2.x < P1.width/2 + P2.width/2
    && P2.y - P1.y < P1.height/2 + P2.height/2
    && P1.y - P2.y < P1.height/2 + P2.height/2) {
 return true;
}
else {
 return false;
} 
}