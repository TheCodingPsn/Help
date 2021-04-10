var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520,);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650, 30, 5, starBody);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 ,{'restitution': 5,'friction':0.3,'density':1.0,'isStatic':false});


	Engine.run(engine);



};
	

function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

if(keyDown("LEFT_ARROW")) {
	fairy.x = fairy.x - 12;
}
if(keyDown("RIGHT_ARROW")) {
	fairy.x = fairy.x + 12;
}




  drawSprites();

}

function keyPressed() {
	//write code here
}
