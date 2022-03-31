const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var SRToy;
var Saiune;
var SRToyskin
var Saiuneskin

function preload(){
  SRToyskin = loadImage("body-1.png");
  Saiuneskin = loadImage("body.png");
}

function setup() {
  createCanvas(1500,700);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,40);
  SRToy = new Players(200,200,100,100);
  Saiune = new Players(600,200,100,100);
}

function draw() {
  background(240);
  Engine.update(engine);
  ground.display();
  SRToy.display();
  Saiune.display();
  drawSprites();
}

