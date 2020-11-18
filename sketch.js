var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;
var survival = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 400);
  
  monkey = createSprite(50,340, 50, 50);
  monkey.addAnimation('running', monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(400, 350, 900, 15);
  ground.velocityX = -4;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  

  
}


function draw() {
  background("white");
  
  textSize(20);
  fill("black")
  stroke("black");
  text("Survival time: " + survival, 100, 50);
  
  textSize(20);
  fill("white")
  stroke("white");
  text("score: " + score, 500, 50);
  //survival = survival + Math.round(frameCount/frameRate());
  survival = survival + Math.round(getFrameRate()/60);
  
  if (ground.x <150){
    ground.x = ground.width/2;
  }
  
  if (keyDown("space")&& monkey.y>=296){
    monkey.velocityY = -13;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  drawSprites();  
}
function food()
{
  if(frameCount % 80 === 0)
  { 
    banana = createSprite(600, Math.round(random(120, 200)), 50, 50);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.2;
    banana.lifetime = 150;
    
    foodGroup.add(banana);
  }
  
}

function obstacles()
{
  if (frameCount % 300 === 0){
    obstacle = createSprite(600, 308, 50, 50);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.2;
    obstacle.lifetime = 150;
    
      }
}

   


