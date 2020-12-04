const Engine =Matter.Engine;
const Bodies=Matter.Bodies;
const World= Matter.World; 

var abworld,abengine;
var ground,ball;

function setup() {
  createCanvas(800,400);
  abengine = Engine.create(); // abengine.world
  abworld= abengine.world;
var goption={ isStatic:true}
ground=Bodies.rectangle(400,400,800,50,goption);
World.add(abworld,ground);
var boption={ restitution : 2}
ball=Bodies.circle(400,100,25,boption);
World.add(abworld,ball);
}

function draw() {
  background(255,255,255);
  Engine.update(abengine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);

  drawSprites();
} 