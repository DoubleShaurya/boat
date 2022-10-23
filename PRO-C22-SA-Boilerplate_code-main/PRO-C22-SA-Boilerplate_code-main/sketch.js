//var x = ["Shaurya", 14, [70, 99, 96, 80, 90], 65, [0, 1]];
//console.log(x[2][3]);
var balls = [];
var boats = [];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon, cannonBall;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  angleMode(DEGREES);
  angle = 20;

  cannon = new Cannon(180, 100, 130, 100, angle);  

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  // boat = new Boat(width-80, height-60, 170, 170, -80);
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  cannon.display();
  for (var i = 0; i<balls.length; i++) {
    showCannonBalls(balls[i], i);
  }

  showBoats();
  //console.log(boats);

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();  
}

function keyReleased () {
  if (keyCode === DOWN_ARROW) { // === --> Data Types compared
    balls[balls.length-1].shoot();
  }
}

function keyPressed () {
  if (keyCode === DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
  }
}

function showCannonBalls (ball, i) {
  if (ball) {
    ball.display();
  }
}

function showBoats () {
  if (boats.length > 0) {
    if (boats[boats.length-1] === undefined || boats[boats.length-1] < width-300) {
      var positions = [-40, -60, -70, -20];
      var position = Math.random(positions);
      
      var boat = new Boat(width, height-100, 170, 170, position);
      boats.push(boat);

      for (var i = 0; i < boats.length; i++) {
        if (boats[i]) {
          Body.setVelocity(boats[i].body, {x:-1, y:0});
          boats[i].display();
        }
      }
    }
  }

  else {
    var boat = new Boat(width, height-100, 170, 170, -60);
    boats.push(boat);
  }
}