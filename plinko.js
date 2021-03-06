function Plinko(x,y,r) {
  var options = {
    isStatic : true,
    density : 1,
    restitution : 1,
    friction : 0
  }
  this.color = random(80,175);
  this.body = Bodies.circle(x,y,r, options);
  this.r = r;
  World.add(world, this.body);
}

Plinko.prototype.show = function() {
  fill(this.color);
  // stroke(255);
  noStroke();
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0,0, this.r * 2);
  pop();
}