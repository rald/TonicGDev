var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var FPS = 60;

var bitmapFont;

var colors=["#000000","#FFFFFF"];

var i=0,j=0,k=23,l=25;



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



function print(font,text,x,y,colors) {
	var px=x*font.width*font.size,py=y*font.height*font.size;
	for(var i=0;i<text.length;i++) {
		drawBitmap(font,text.charCodeAt(i),px,py,colors);
		px+=font.width*font.size;
		if(px+font.width*font.size>canvas.width) {
			py+=font.height*font.size;
		}
	}
}


function box(font,x0,y0,x1,y1,colors) {

	if(x0>x1) { var t=x0; x0=x1; x1=t; }
	if(y0>y1) { var t=y0; y0=y1; y1=t; }

	var x=x0;
	var y=y0;
	var w=x1-x0+1;
	var h=y1-y0+1;

	for(var i=0;i<w-2;i++) {
		drawBitmap(font,196,(x+i+1)*font.width*font.size,y*font.width*font.size,colors);
		drawBitmap(font,196,(x+i+1)*font.width*font.size,(y+h-1)*font.width*font.size,colors);
	}

	for(var j=0;j<h-2;j++) {
		drawBitmap(font,179,x*font.width*font.size,(y+j+1)*font.width*font.size,colors);
		drawBitmap(font,179,(x+w-1)*font.width*font.size,(y+j+1)*font.width*font.size,colors);
	}

	drawBitmap(font,218,x*font.width*font.size,y*font.width*font.size,colors);
	drawBitmap(font,191,(x+w-1)*font.width*font.size,y*font.width*font.size,colors);
	drawBitmap(font,192,x*font.width*font.size,(y+h-1)*font.width*font.size,colors);
	drawBitmap(font,217,(x+w-1)*font.width*font.size,(y+h-1)*font.width*font.size,colors);
	
}



function draw() {	


	box(bitmapFont,i,j,k,l,colors);
	i+=2;
	j+=2;
	k-=2;
	l-=2;

	if(i>23) i=0;
	if(j>25) j=0;
	if(k<0) k=23;
	if(l<0) l=25;
}



function main() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	bitmapFont=new Bitmap(8,8,256,4,font);

	setInterval(draw,1000/FPS);
}



main();
