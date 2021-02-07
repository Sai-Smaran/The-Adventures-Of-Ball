const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const ConStraint = Matter.Constraint;

var gamestate = "play";

var bgimg, underimg;
var engine, world;
var secground, secground2, ground, ground2, ground3, ground4, ground5, ground6;
var ball, bridgeball1, bridgeball2, bridgeball3, bridgeball4, chain;

function preload() {
  bgimg = loadImage("./imgs/background.png");
  underimg = loadImage("./imgs/underground.png");
}

function setup() {
  var canvas = createCanvas(1055, 800);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 2;

  ball = new Ball(400, 200);

  ground = new Ground(400, 400, 1000, 10);
  ground2 = new Ground(1500, 400, 300, 10);
  ground3 = new Ground(2800, 600, 1200, 10);
  ground4 = new Ground(3500, 600, 500, 10);
  ground5 = new Ground(3600, 400, 600, 10);
  ground6 = new Ground(4500, 500, 600, 10);
  ground7 = new Ground(5500, 700, 650, 10);
  ground8 = new Ground(6500, 600, 1000, 10);
  ground9 = new Ground(7500, 500, 800, 10);
  secground = new Ground(890, 420, 10, 10);
  secground2 = new Ground(1350, 420, 10, 10);

  bridgeball1 = new Ball2(925, 400);
  bridgeball2 = new Ball2(975, 400);
  bridgeball3 = new Ball2(1025, 400);
  bridgeball4 = new Ball2(1075, 400);
  bridgeball5 = new Ball2(1125, 400);
  bridgeball6 = new Ball2(1175, 400);
  bridgeball7 = new Ball2(1225, 400);
  bridgeball8 = new Ball2(1275, 400);
  bridgeball9 = new Ball2(1325, 400);

  chain1 = new Chain(secground.body, bridgeball1.body);
  chain2 = new Chain(bridgeball1.body, bridgeball2.body);
  chain3 = new Chain(bridgeball2.body, bridgeball3.body);
  chain4 = new Chain(bridgeball3.body, bridgeball4.body);
  chain5 = new Chain(bridgeball4.body, bridgeball5.body);
  chain6 = new Chain(bridgeball5.body, bridgeball6.body);
  chain7 = new Chain(bridgeball6.body, bridgeball7.body);
  chain8 = new Chain(bridgeball7.body, bridgeball8.body);
  chain9 = new Chain(bridgeball8.body, bridgeball9.body);
  chain10 = new Chain(bridgeball9.body, secground2.body);
}

function draw() {
  background(bgimg);
  Engine.update(engine);
  camera.x = ball.body.position.x;
  if (ball.body.position.y >= 850) {
    gamestate = "lose";
  }
  if (ball.body.position.x >= 7500) {
    gamestate = "win";
  }
  if (gamestate === "play") {
    ball.display();
    ground.display();
    ground2.display();
    ground3.display();
    image(underimg, 3300, 413, 600, 500);
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();
    ground8.display();
    ground9.display();

    image(underimg, 0, 413, 900, 500);
    image(underimg, 1350, 413, 300, 500);
    image(underimg, 2200, 613, 1550, 250);
    image(underimg, 4200, 513, 600, 400);
    image(underimg, 5175, 713, 650, 500);
    image(underimg, 6000, 613, 1000, 500);
    image(underimg, 7100, 513, 900, 500);

    bridgeball1.display();
    bridgeball2.display();
    bridgeball3.display();
    bridgeball4.display();
    bridgeball5.display();
    bridgeball6.display();
    bridgeball7.display();
    bridgeball8.display();
    bridgeball9.display();

    if (keyDown("left")) {
      Matter.Body.applyForce(ball.body,ball.body.position,{x:-20, y:0});
    }
    if (keyDown("right")) {
      Matter.Body.applyForce(ball.body,ball.body.position,{x:20, y:0});
    }
    if (keyDown("space")) {
      Matter.Body.applyForce(ball.body,ball.body.position,{x:0, y:-50});
    }
  }
  if (gamestate === "lose") {
    camera.x = width/2;
    textSize(40);
    fill("red");
    text("You Lose...", width/2-100, height/2);
  }
  if (gamestate === "win") {
    camera.x = width/2;
    textSize(40);
    fill("green");
    text("You Have Completed The Game!", width/2-300, height/2);
  }
}