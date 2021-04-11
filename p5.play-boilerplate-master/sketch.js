var fixedRect, movingRect;
var ob1,ob2,ob3

function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1=createSprite(200,100,50,50);
  ob2=createSprite(400,100,50,50);
  ob3=createSprite(600,100,50,50);

  ob1.shapeColor="green";
  ob2.shapeColor="green";
  ob3.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( collision(movingRect,ob2)){
  movingRect.shapeColor = "red";
      ob2.shapeColor = "red";
 }else{
       movingRect.shapeColor = "green";
    ob2.shapeColor = "green";

 }
  
  drawSprites();
}

function collision(p1,p2){

  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {

      return true;
}
else {

      return false;
}
}
