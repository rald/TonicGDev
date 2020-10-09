let fps=60;
let canvas;
let ctx;




function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	draw();
}



function draw() {
	Graphics.fillRect(ctx,0,0,canvas.width,canvas.height,palette[0]);

	Graphics.drawText(ctx,"Hello World",0,0,4,font,palette[6]);
}



function main() {
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");

	resize();

	window.onresize=resize;	
}



main();
