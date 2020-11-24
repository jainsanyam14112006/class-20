var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="blue";
}

function draw() {
  background(0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;


  console.log(movingRect.x-fixedRect.x);
console.log(fixedRect.width/2+movingRect.width/2);
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}
  drawSprites();
}