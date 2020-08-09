const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, box2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(300, 100, 70, 70);
  box2 = new Box(350, 300 ,80, 80);

  ground = new Ground(200, 390, 400, 20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}