var m1,m2;
function setup() {
  createCanvas(800,400);
 m1= createSprite(400, 200, 50, 50);
 m2= createSprite(600, 200, 50, 50);
 m1.shapeColor="red";
 m2.shapeColor="red";
}

function draw() {
  background(0);  
  m2.x=mouseX;
  m2.y=mouseY;
 if(isTouching(m1,m2)){
   m1.shapeColor="blue";
   m2.shapeColor="green";
 }else{
   m1.shapeColor="red";
   m2.shapeColor="red";
 }
  drawSprites();
}

