var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine, 
    world, 
    particles = [], 
    plinkos = [],
    bounds = [],
    cols = 11,
    rows = 9,
    score = 0,
    left = 50;
    particleSize = 10,
    plinkoSize = 14;

function setup() {
  createCanvas(600,650);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 2;
  
  newParticle();
  var spacing = width / cols;
  for (let j = 0; j < rows; j ++) {
    for (let i = 0; i < cols +1; i ++) {
      var x = i * spacing;
      if (j % 2 == 0) {
        x += spacing / 2;
      }
      var y = spacing + j * spacing;
      var p = new Plinko(x, y, plinkoSize);
      plinkos.push(p);
    }
  }
  
  var b = new Boundary(width/2, height + 50, width, 100);
  
  bounds.push(b);
  for (let i = 0; i < cols +1; i ++) {
    var x = i * spacing;
    var h = 100;
    var w = 10;
    var y = height - h/2;
    var b = new Boundary(x, y, w, h);
    bounds.push(b);
  }
}


function newParticle() {
  var p = new Particle(mouseX,0,particleSize);
  particles.push(p);
}

function draw() {
  if (frameCount % 30 == 0) {
    newParticle();
  }

  if (frameCount % 55 == 0) {
    score++
    left = left -1;
  }

  background(51);
  Engine.update(engine);
  
  textSize(22);
  textFont("TimesNewRoman");
  text("Score : "+ score,10,30);

  for (let i = 0; i < particles.length; i++) {
    particles[i].show();  
    if (particles[i].isOffScreen()) {
      World.remove(world, particles[i].body);
      particles.splice(i,1);
      i--;
    } 
  }
  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].show();  
  }
  
  for (let i = 0; i < bounds.length; i++) {
    bounds[i].show();  
  }
}
