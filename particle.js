function Particle(x,y,r) {
  
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  var options = {
    isStatic : false,
    mass : 0,
    density : 1,
    restitution : 0.6,
    friction : 1
  }
  x += random(-1, 1);
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);
}

Particle.prototype.isOffScreen = function() {
  var x = this.body.position.x;
  var y = this.body.position.y;
  return (x < -50 || x > width + 50 || y > height + 50);
}

Particle.prototype.show = function() {
  noStroke();
  fill(this.r, this.g, this.b);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0,0, this.r * 2); 
  pop();
}