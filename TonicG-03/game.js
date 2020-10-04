var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var FPS = 60;

var bitmapFont;

var colors=["transparent","#00FF00"];



function radians(degrees) {
	return degrees*Math.PI/180; 
}



function rnd(x) {
	return Math.floor(Math.random()*x);
}



function Bitmap(width,height,frames,size,pixels) {
	this.width=width;
	this.height=height;
	this.frames=frames;
	this.size=size;
	this.pixels=pixels;
}



function drawBitmap(bitmap,frame,x,y,colors) {
	for(var j=0;j<bitmap.height;j++) {
		for(var i=0;i<bitmap.width;i++) {
			var index=bitmap.pixels[i+j*bitmap.width+frame*bitmap.width*bitmap.height];
			var color=colors[index];
			if(color!="transparent"){
				ctx.fillStyle=color;
				ctx.fillRect(x+i*bitmap.size,y+j*bitmap.size,bitmap.size,bitmap.size);
			}
		}
	}
}



function draw() {
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	for(var i=0;i<256;i++) {
		ctx.strokeStyle="#FFFFFF";
		ctx.strokeRect((i%16)*(bitmapFont.width+1)*bitmapFont.size,Math.floor(i/16)*(bitmapFont.height+1)*bitmapFont.size,(bitmapFont.width)*bitmapFont.size,(bitmapFont.height)*bitmapFont.size);
		drawBitmap(bitmapFont,i,(i%16)*(bitmapFont.width+1)*bitmapFont.size,Math.floor(i/16)*(bitmapFont.height+1)*bitmapFont.size,colors);
	}
}


function main() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	bitmapFont=new Bitmap(8,8,256,4,font);

	draw();
}



main();
