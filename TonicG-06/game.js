class Game {

	constructor() {
		this.canvas=document.getElementById("canvas");
		this.ctx=canvas.getContext("2d");
		this.frame=0;
		this.bitmap=new Bitmap(8,8,256,4,font);
	}

	resize() {
		this.canvas.width=window.innerWidth;
		this.canvas.height=window.innerHeight;
		this.centerX=this.canvas.width/2;
		this.centerY=this.canvas.height/2;
		this.x=this.centerX;
		this.y=this.centerY;
		Graphics.fillRect(this.ctx,0,0,this.canvas.width,this.canvas.height,"#000000");
	}

	draw() {
		Graphics.fillRect(this.ctx,0,0,this.canvas.width,this.canvas.height,"#00000008");

		this.bitmap.draw(this.ctx,Math.floor(Math.random()*26)+65,this.x,this.y,["transparent","#00FF00"]);

		this.x=this.centerX+Math.cos(this.frame/ 7)*150;
		this.y=this.centerY+Math.sin(this.frame/11)*200;
		
		this.frame++;
	}

}
