class Bitmap {

	constructor(width,height,frames,pixels) {
		this.width=width;
		this.height=height;
		if(frames===undefined) this.frames=1; else this.frames=frames;
		if(pixels===undefined) {
			this.pixels=new Array(width*height*frames);
			for(let i=0;i<width*height*frames;i++) { 
				this.pixels[i]="transparent";
			}
		} else {
			this.pixel=pixels;
		}
	}

	drawPoint(x,y,color) {
		this.pixels[x+y*this.width]=color;
	}

	drawLine(x0,y0,x1,y1,color) {
	}

	drawCircle(x,y,radius,color) {
	}

	fillCircle(x,y,radius,color) {
	}

	drawRect(x0,y0,x1,y1,color) {
	}

	fillRect(x0,y0,x1,y1,color) {
	}

}

