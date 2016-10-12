var time1 = 0;
var time2 = 24650;
var time3 = 30000;

var angle = 0;
var offset = 30;
var scalar = 1;
var speed = .5;
var r = 0;

var blue;
var pink;
var shape;

var music;

function preload(){

   music = loadSound("music/music.mp3");

   blue = loadImage("imgs/blue.png");
   pink = loadImage("imgs/pink.png");
   shape = loadImage("imgs/shape.png");
}

function setup() {
  createCanvas(1000,700);
  music.loop();

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
if (currentTime > time2 && currentTime < time3) {
  x = x + 2;
   image(blue, x, y, width/4, height/4);
 }
 if (currentTime > time3) {
   var x = offset + cos(angle) * scalar;
   var y = offset + sin(angle) * scalar;
   rotate(r);
   r = r + .01;
   image(pink, x, y);
   image(shape, x, y);
   angle = angle + speed;
   scalar = scalar + speed;
 }

}
