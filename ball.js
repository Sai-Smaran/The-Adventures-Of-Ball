class Ball {
  constructor(x, y) {
    var options = {
        'restitution':0.2,
        'friction':1.0,
        'density':1.0
    }
    this.image = loadImage("./imgs/ball.png");
    this.body = Bodies.circle(x, y, 25, options);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
  }
};
