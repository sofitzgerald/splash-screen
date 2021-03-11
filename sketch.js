var previousX;
var previousY;
let walker;
var theta = 0.0;

function setup() {
  //createCanvas(windowWidth, windowHeight, WEBGL);
  createCanvas(windowWidth, windowHeight);
  //background(255);
  // previousX=width/2;
  // previousY=height/2;
  //pos = createVector(width / 2, height / 2)
  //prevpos = createVector;
  walker = new Walker(width/2,height/2);
  //background(30);

  //colorMode (HSB,360,100,100);

}

function draw() {
  // draw line
 
  walker.update();
  walker.show();

}