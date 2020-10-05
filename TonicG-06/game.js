class Game {

	constructor() {
		this.canvas=document.getElementById("canvas");
		this.ctx=canvas.getContext("2d");
	}

	resize() {
		this.canvas.width=window.innerWidth;
		this.canvas.height=window.innerHeight;

		this.maxX=Math.floor(this.canvas.width/(font.width*2));
		this.maxY=Math.floor(this.canvas.height/(font.height*2));

		this.terminal=new Terminal(0,0,this.maxX,this.maxY);

		this.draw();
	}

	draw() {

		Graphics.fillRect(this.ctx,0,0,this.canvas.width,this.canvas.height,"#000000");

		this.terminal.clear();
		this.terminal.box(3,3,10,5,["#000000","#FFFFFF"]);
		this.terminal.draw(this.ctx,2,font);

	}

}
