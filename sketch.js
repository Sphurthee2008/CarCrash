
var car1,car2,wall1,wall2,car3,car4,wall3,wall4;
var speed, weight;

function setup() {
  createCanvas(1500,800);
  speed=random(55,90);
  weight=random(400,1500);
  wall1=createSprite(1400,100,20,100)
  wall1.shapeColor = "white"
  car1=createSprite(50,100,50,50);
  car1.shapeColor = "white"
  wall2=createSprite(1400,300,20,100)
  wall2.shapeColor = "white"
  car2=createSprite(50,300,50,50);
  car2.shapeColor = "white"
  wall3=createSprite(1400,500,20,100)
  wall3.shapeColor = "white"
  car3=createSprite(50,500,50,50);
  car3.shapeColor = "white"
  wall4=createSprite(1400,700,20,100)
  wall4.shapeColor = "white"
  car4=createSprite(50,700,50,50);
  car4.shapeColor = "white"
  
}

function draw() {
  background(0);  
  car1.velocityX = speed;
  if(wall1.x-car1.x < (car1.width+wall1.width)/2)
  {
    car1.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      car1.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0)
    }
  }

  car2.velocityX = speed;
  if(wall2.x-car2.x < (car2.width+wall1.width)/2)
  {
    car2.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509
    if(deformation>180)
    {
      car2.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      car2.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
      car2.shapeColor=color(0,255,0)
    }
  }

  car3.velocityX = speed;
  if(wall3.x-car3.x < (car3.width+wall1.width)/2)
  {
    car3.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509
    if(deformation>180)
    {
      car3.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      car3.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
      car3.shapeColor=color(0,255,0)
    }
  }
  car4.velocityX = speed;
  if(wall4.x-car4.x < (car4.width+wall1.width)/2)
  {
    car4.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509
    if(deformation>180)
    {
      car4.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      car4.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
      car4.shapeColor=color(0,255,0)
    }
  }


  drawSprites();
}