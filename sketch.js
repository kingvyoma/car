var zenia,Tourus,cyclap,wall
var speed, weight




function setup() {
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)

  wall=createSprite(1500,200,60,height/2)
  zenia.createSprite(300,50)
  Tourus.createSprite(500,50)
  cyclap.createSprite(700,50)

  zenia.velocityX= speed          
  Tourus.velocityX= speed
  cyclap.velocityX= speed

  deformation=0.5/weight/speed/speed
                  22500
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

if(wall.x-car.x < (car.width+wall.width)/2 )
{
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509
if(deformation>180){

    zenia.shapeColor=color(255,0,0)
    Tourus.shapeColor=color(255,0,0)
    cyclap.shapeColor=color(255,0,0)
}

if(deformation<180 && deformation>100)
{
    zenia.shapeColor=color(230,230,0)
    Tourus.shapeColor=color(230,230,0)
    cyclap.shapeColor=color(230,230,0)
}

if(deformation>100){
    zenia.shapeColor=color(0,255,0)
    Tourus.shapeColor=color(0,255,0)
    cyclap.shapeColor=color(0,255,0)
}

}