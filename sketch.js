
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var dustbinObj, paperObject,groundObject,a;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    engine=Engine.create();
	world=engine.world;
	groundObject=new ground(width/2,670,width,20);
	paperObject=new paper(200,450,70);
	dustbinObj=new dustbin(1200,650);
	
	

	

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(135,206,235);
  fill(0)
  textSize(30)
 text('throwng trash in the dustbin is a good habit and keeps the room clean',10,50)
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
//sorry maam,I used the code u sent me as my pro24 is not working and i donot have the images.. but i modified it a little
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-160});

    
  	}
}





