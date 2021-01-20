var car;
var wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed=random(30,60)
  weight=random(400,1500)
  
  var car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  

  var wall = createSprite(1300,200,60, height/2);
  wall.shapeColor = (80,80,80);

 
}

function draw() {
  background("black"); 
  
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed / 22508;
    if(deformation > 180)
    {
      car.shapeColor = (255,0,0);
    }
    
  if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = (230,230,0);
    }

  if(deformation < 100)
  {
    car.shapeColor = (0,255,0);
  }

  }

  drawSprites();
}