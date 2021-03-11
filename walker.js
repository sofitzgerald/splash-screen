class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }
  update() {
    // set previousX and previousY to x and y
    previousX = this.pos.x;
    previousY = this.pos.y;
    if (random() > 0.5) {
      this.pos.x = this.pos.x + 10;
    } else {
      this.pos.x = this.pos.x - 10;
    }
    if (random() > 0.5) {
      this.pos.y = this.pos.y + 15;
    } else {
      this.pos.y = this.pos.y - 15;
    }

    // if (this.pos.x > width || this.pos.x < 0 || this.pos.x > height || this.pos.x < 0) {
    //   previousX = width / 2
    //   previousY = height / 2;
    // }
  }


  show() {
    
    var r = color(100, 0,255);
    var b = color(200,100,0);
    
    var distance = dist(previousX, previousY, windowWidth / 2, windowHeight / 2);
    var thickness = map(distance, 0, dist(0, 0, windowWidth / 2, windowHeight / 2), 0.1, 3);


    //let distanciaCentro = dist(width/2, height/2, this.pos.x, this.pos.y);
    //let tinte = map(distanciaCentro, 0, width/2, 0, 360);


    //let from = color(255, 0, 0);
    //let to = color(20, 0, 200);

    //let tinte = lerpColor( to, from, 0.5);

    var t = map(mouseX, 0, width, 0, 1.0);
    var c = lerpColor(r, b, t);
    
    strokeWeight(thickness);
    stroke(c, 100, 100);


    // draw line
    line(previousX, previousY, this.pos.x, this.pos.y);

    //stay in the screen 
    if (previousX > windowWidth || previousX < 0 ) {
      this.pos.x = windowWidth/2; 
    }
    if (previousY > windowHeight || previousY < 0 ) {
      this.pos.y = windowHeight/2; 
    }
  }
}