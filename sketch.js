
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var venusTicket = "FAIL";
var marsTicket = "FAIL";
var jupiterTicket = "FAIL";
var neptuneTicket = "FAIL";
var saturnTicket = "FAIL";


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,500,40);
	
	bob1 = new Bob(600,500,200);

	bob2 = new Bob(500,500,90);

	bob3 = new Bob(400,500,90);

	bob4 = new Bob(300,500,90);

	bob5 = new Bob(200,500,90);

	rope1 = new Rope(bob1.body,roof.body,200,0);

	rope2 = new Rope(bob2.body,roof.body,105,0);

	rope3 = new Rope(bob3.body,roof.body,5,0);

	rope4 = new Rope(bob4.body,roof.body,-95,0);

	rope5 = new Rope(bob5.body,roof.body,-195,0);

	pin = new Roof(random(150,650),510,10,10);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(100);


  textSize(10);
  fill("white");
  textFont("georgia");

  text("NEWTONS GRAVITY MISSION",270,30);
  text("PRESS SPACE TO REACH THE FOLLOWING PLANETS AND COMPLETE THE MISSION",200,70)
  text("VENUS MISSION : " + venusTicket , 50,650);
  text("JUPITER MISSION : " + jupiterTicket , 200,650);
  text("MARS MISSION : " + marsTicket , 360,650);
  text("NEPTUNE MISSION : " + neptuneTicket , 500,650);
  text("SATURN MISSION : " + saturnTicket , 660,650);
  text("VENUS",180,570);
  text("MARS",280,570);
  text("JUPITER",380,570);
  text("NEPTUNE",480,570);
  text("SATURN",580,570);
  
  
  
 roof.display();

 bob1.display();

 bob2.display();

 bob3.display();

 bob4.display();

 bob5.display();

 rope1.display();

 rope2.display();

 rope3.display();

 rope4.display();

 rope5.display();

 pin.display();

 if(pin.body.position.x > 150 && pin.body.position.x<250 ){
	 venusTicket = "SUCCESS";
 }

 if(pin.body.position.x > 250 && pin.body.position.x<350 ){
	marsTicket = "SUCCESS";
}

if(pin.body.position.x > 350 && pin.body.position.x<450 ){
	jupiterTicket = "SUCCESS";
}

if(pin.body.position.x > 450 && pin.body.position.x<550 ){
	neptuneTicket =  "SUCESS";
}

if(pin.body.position.x > 550 && pin.body.position.x<650 ){
	saturnTicket = "SUCCESS";
}


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		pin = new Roof(random(150,650),510,10,10);
	}
}
	
	


