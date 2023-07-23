var bg, backg;
var panda, player;
  var fruit1,fruit2,fruit3,fruit,fruitG;
  var edges; 
  var obs1,obs2,ob1,ob2;
  score = 0;
  var obstacleG;
  var play = 1;
  var End =0;
  var gameState = 1;
 var gameOver,gameO;

function preload(){
  panda = loadImage("animal1-removebg-preview.png")
  bg = loadImage("bg2.jpg")
  fruit1 = loadImage("b.png")
  fruit2 = loadImage("s.png")
  fruit3 = loadImage("a.png")
obs1 = loadImage("ob1.png")
obs2 = loadImage("ob2.png")
gameO = loadImage("gameOver.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  backg= createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
backg.addImage(bg)
backg.scale = 2.1;


player= createSprite(displayWidth-1000, displayHeight-220, 50, 50);
 player.addImage(panda)
   player.scale = 0.3
    
   fruitG =new Group; 
   obstacleG = new Group;
}

function draw() {
  if(gameState === play ){
  background("white");  
//edges = createEdgeSprites(edges)
edges= createEdgeSprites();
player.collide(edges);
//panda.bounceOff(edges);

  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
   player.x = player.x+30
  }
}
fruits();
spawn();

if (fruitG.isTouching(player)) {
  fruitG.destroyEach();
  score+= 5;
} else{
  if(obstacleG.isTouching(player)){
gameState = End;
fruitG.destroyEach();
obstacleG.destroyEach();
player.destroy();
fruitG.setVelocityYEach(0);
obstacleG.setVelocityYEach(0);
gameOver = createSprite(displayWidth/2-100,displayHeight/2,150,30)
gameOver.addImage(gameO);
gameOver.scale = 1;
fruitG.setLifetime = 0;
obstacleG.setLifetime = 0;
  }
} 
  drawSprites();

  textSize(30);
  fill("White");
  text("SCORE:"+ score,30,30);

  }

  //if(player.isTouching(fruit)){
   // score += 1;
    //fruits.destroy();

  //}

function fruits(){

  if(World.frameCount%80===0){
    fruit=createSprite(displayWidth/2-150,displayHeight-100,20,20);
    fruit.y= 0  
fruit.scale = 0.18;
fruit.velocityY = 4;

  r=Math.round(random(1,3));
  if (r == 1) {
    fruit.addImage(fruit1);
    //fruit1.scale = 0.3;
  } else if (r == 2) {
    fruit.addImage(fruit2);
   // fruit2.scal
  } else if (r == 3) {
    fruit.addImage(fruit3);
  }
fruitG.add(fruit);
  fruit.x = Math.round(random(10,3800))
  fruit.setLifetime = 50;
}
}

function spawn(){

if(World.frameCount%95===0){
  ob1=createSprite(displayWidth/2-150,displayHeight-100,20,20);
  ob1.y= 0
ob1.scale = 0.18;
ob1.velocityY = 4;

rand=Math.round(random(4,5));
if (rand == 4) {
  ob1.addImage(obs1);
  ob1.scale = 0.37;
  //fruit1.scale = 0.3;
} else if (rand == 5) {
  ob1.addImage(obs2);
 // fruit2.scal
} 
obstacleG.add(ob1);
ob1.x = Math.round(random(10,3800))
ob1.setLifetime = 50;
}
}


