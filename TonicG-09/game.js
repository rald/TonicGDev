let fps=60;
let canvas;
let ctx;



let bitmap;



function draw() {
	Graphics.fillRect(ctx,0,0,canvas.width,canvas.height,palette[0]);

	bitmap.drawPoint(0,0,palette[6]);

	Graphics.drawBitmap(ctx,0,0,0,4,bitmap,palette);
}



function main() {
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	bitmap=new Bitmap(256,256);

  draw();
}



main();
s
