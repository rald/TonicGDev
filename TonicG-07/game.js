let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");



function rnd(x) {
	return Math.floor(Math.random()*x);
}



function resize() {
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

	draw();
}



function draw() {

	Graphics.fillRect(ctx,0,0,canvas.width,canvas.height,palette[0]);

	Graphics.drawText(ctx,"Hello World",0,0,size,font,[palette[0],palette[6]]);
}



function main() {
	resize();
	window.onresize=resize;

	draw();
}



main();
