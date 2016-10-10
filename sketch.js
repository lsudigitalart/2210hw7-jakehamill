var time1 = 2000;
var time2 = 30000;

var angle = 0;
var offset = 30;
var scalar = 1;
var speed = .5;
var r = 0;

var backg;
var blue;
var pink;
var shape;



//var music;

function preload(){

   //music = loadSound("music.mp3");

   backg = loadImage("imgs/background.png");
   blue = loadImage("imgs/blue.png");
   pink = loadImage("imgs/pink.png");
   shape = loadImage("imgs/shape.png");
}

function setup() {
  createCanvas(1000,700);
  imageMode(CENTER);
  image(backg, width/2,height/2);


  //music.loop();

}

function draw(){
var currentTime = millis();
if (currentTime > time1) {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  rotate(r);
  r = r + .01;
  image(pink, x, y);
  image(shape, x, y);
  angle = angle + speed;
  scalar = scalar + speed;
}
if (currentTime > time2) {
  x = x + 2;
   image(blue, x, y, width/4, height/4);
 }

}
