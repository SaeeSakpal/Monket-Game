
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

var survivalTime=0;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacelImage = loadImage("obstacle.png");
   
}

function setup() {
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw() {
  background(225);
  
  if(ground.x<0){
    ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score" + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime, 100, 50);  
    
  banana();
  obstacle();
  
 drawSprites(); 
}

function banana() {
  if (frameCount % 80 === 0){
    var banana = createSprite(600, 120, 20, 20);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120, 200));
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 147;
    bananaGroup.add(banana);
  }
}

function obstacle() {
  if (frameCount % 300 === 0){
    var obstacle = createSprite(800, 140, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 100;
    
    
  }
}