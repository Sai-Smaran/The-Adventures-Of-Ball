class Ground{
  constructor(x, y, width, height) {
      var options = {
          isStatic: true,
      }
      this.image = loadImage("./imgs/ground2.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, 25);
      pop();
    }
}
