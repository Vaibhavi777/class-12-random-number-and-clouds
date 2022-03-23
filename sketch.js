var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds,cloudimage



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(-10,-100))
  console.log(rand)
console.log(rand)
var rand1 =  Math.round(random(1,100))
console.log(rand1)
console.log(rand1)
}

function draw() {
  //set background color
  background(180);
  
  // console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  console.log(frameCount)
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
  //write code here to spawn the clouds
  if (frameCount % 10 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudimage)
    cloud.y = Math.round(random(10,100))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    // //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
// FRAME COUNT = NO. OF FRAMES
//9%2=1
//9%3=0
//15%5=0
//60%60=0
//120%60=0


