


var p1, cpu, fire




var P1 = 1
var P2 = 2
var START = 0
var gamemode = START
var move = 20

var start_x = 0;
var start_y = 0;
var speed = 100;
var velx; 
var vely; 
var angle;
var radians;
var time;
var distance;

function preload(){

}

function setup() {
  createCanvas(2000, 600);
  
 

p1 = createSprite(100,575,15,15)
cpu = createSprite(1900,575,15,15)
ground = createSprite(1000,590,2000,20)
fire = createSprite(p1.x,p1.y,5,5);
fire.visible = false

angle = 45; 



  
 
 
}

function draw() {
  
  background(0);
  rectMode(CENTER);
  
  
  fill(255,255,255)
  textSize(20)
 
  
	if(gamemode == START){
    text("press enter to start", 2000/2, 600/2)
    
    
    
    if(keyDown("enter")){
      gamemode = P1
    }
 
  }
  if(gamemode == P1){
    
    
  mechanics();
  
  text("angle:"+ angle,50,50)
  text("power:"+ speed,50,30)
  text("moves:"+ move,50,10)
 
    if(keyDown("space")) {
      fire.x=p1.x
      fire.y=p1.y 
      fire.visible = true
      fire.velocityY = -vely/10 ;
      fire.velocityX = velx/10
      gamemode = P2;
    }
    
    
   

    fire.velocityY = fire.velocityY + 5

  
   fire.collide(ground)
  
  if(fire.isTouching(ground)){
    fire.velocityX=0
    fire.velocityY=0
  }
  }
  
   console.log(fire.x-p1.x)
  drawSprites();
}
function mechanics() {

  


    radians = angle * (Math.PI / 180);
    
    time = 1;
    distance = speed * time;
    
    
    velx = Math.cos(radians) * distance;
    vely = Math.sin(radians) * distance;

	if(keyDown("d") && move > 0){
			p1.x = p1.x + 5;
		  move = move -1
			   
	}
	
	if(keyDown("a") && move > 0){
      p1.x = p1.x - 5;
      move = move -1
				
	}
	
	if (keyDown("down_arrow") && angle >0) {
	    angle = angle -1
	}
	if (keyDown("up_arrow") && angle <90) {
	    angle = angle +1
	}
	
  }
//not really an "AI"
function AI(){
  md = Math.random(round(5,10))
  d = Math.random(round(0,1))
  if (d = 0){
    cpu.x=cpu.x-md
  }else if(d = 1){
    cpu.x=cpu.x+md
  }
}
