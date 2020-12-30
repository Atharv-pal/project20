var car;
var wall;
var speed;
var weight;


function setup() {  
  createCanvas(1520,400);
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;

  wall=createSprite(1420,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0,0,0);  

  if (wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0;
    var d=0.5*weight*speed*speed/22500;
    if(d>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(d<=180 && d>=100){
      car.shapeColor=color(230,230,0);
    }
    if(d<100){
      car.shapeColor=color(0,255,0);
    }
  }                 
                     

  drawSprites();
}