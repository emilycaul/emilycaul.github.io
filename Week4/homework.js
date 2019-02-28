var w = 150;
var h = 75;
var x = -w;
var speed = 3;


function setup() {
  createCanvas(600, 400);
  background(255);
  noStroke();
  colorMode(HSB,360,100,100,100);
}

function draw() {
  background(360);
  x=x+speed;
  fill(0);
  rect(x,height/2-h/2,w,h);
  if(x>width){x=-w;}
}