let fps=60;
let canvas;
let ctx;



function draw() {
	Graphics.fillRect(ctx,0,0,canvas.width,canvas.height,palette[0]);
	Graphics.drawText(ctx,"Hello World",0,0,4,font,["transparent",palette[6]]);
}



function main() {
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

  draw();
}



main();
