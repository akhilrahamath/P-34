const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const Body = Matter.Body

var engine,world;
var backgroundIMG;
var ground1,ground2;
var hero;
var rope;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var monster;

function preload(){
backgroundIMG=loadImage("Images/Background.png");
}

function setup(){
  createCanvas(3000, 800);
  
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,600,1200,20);
  ground2 = new Ground(1066,330,100,5);
  hero = new Hero(200,200,160,100);
  rope= new Rope(hero.body,{x:500,y:50});
  box1 = new Block(900, 100, 70, 70);
  box2 = new Block(900, 100, 70, 70);
  box3 = new Block(900, 100, 70, 70);
  box4 = new Block(900, 100, 70, 70);
  box5 = new Block(900, 100, 70, 70);
  box6 = new Block(900, 100, 70, 70);
  box7 = new Block(800, 100, 70, 70);
  box8 = new Block(800, 100, 70, 70);
  box9 = new Block(800, 100, 70, 70);
  box10 = new Block(800, 100, 70, 70);
  box11 = new Block(800, 100, 70, 70);
  box12 = new Block(800, 100, 70, 70);
  box13 = new Block(700, 100, 70, 70);
  box14 = new Block(700, 100, 70, 70);
  box15 = new Block(700, 100, 70, 70);
  box16 = new Block(700, 100, 70, 70);
  box17 = new Block(700, 100, 70, 70);
  box18 = new Block(700, 100, 70, 70);
  box19 = new Block(700, 100, 70, 70);
  box20 = new Block(700, 100, 70, 70);
  monster = new Monster(1100,300,120,80);

  Engine.run(engine);
}

function draw() {
  background(backgroundIMG);

  Engine.update(engine);

  ground1.display();
  ground2.display();
  hero.display();
  rope.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  monster.display();
}

function mouseDragged(){
 Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}