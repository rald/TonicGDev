var FPS=60;
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var ax=0,ay=0,az=0;
var absolute=0,alpha=0,beta=0,gamma=0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




function rnd(x) {
	return Math.floor(Math.random()*x);
}



function draw() {

	setFillStyle("#000000");
	fillRect(0,0,canvas.width,canvas.height);

	setFillStyle("#00FF00");
	setFont("16px monospace");
	fillText(ax+","+ay+","+az,32,32);
	fillText(absolute+","+alpha+","+beta+","+gamma,32,64);
}



function handleOrientation(event) {
  absolute = event.absolute;
  alpha    = event.alpha;
  beta     = event.beta;
  gamma    = event.gamma;
}


function handleMotion(event) {
  ax = event.acceleration.x;
  ay = event.acceleration.y;
  az = event.acceleration.z;
}

window.addEventListener("deviceorientation", handleOrientation, true);
window.addEventListener("devicemotion", handleMotion, true);

setInterval(draw,1000/FPS);



