//namespacing or nicknaming
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

//for the angry bird game
var engine, world;

var ground;
var ball;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  //stopped the ground from falling down by making it static
  groundOptions = {
    isStatic: true
  }
  
  //created a ground from Matter.Bodies class
  ground = Bodies.rectangle(200,380,400,10,groundOptions);
  //added ground to the main world
  World.add(world,ground);

  ballOptions={
    restitution:0.8
  }

  ball=Bodies.circle(180,180,20,ballOptions);
  World.add(world,ball);
  console.log(ground);

}

function draw() {
  background("darkgreen");  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}