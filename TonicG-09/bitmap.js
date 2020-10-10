class Bitmap {

	constructor(paletteIndex,width,height,frames,pixels) {
		this.width=width;
		this.height=height;
	
		if(frames===undefined) this.frames=1; else this.frames=frames;
	
		if(pixels===undefined) {
			this.pixels=new Array(width*height*this.frames);
			for(let i=0;i<width*height*this.frames;i++) { 
				this.pixels[i]=paletteIndex;
			}
		} else {
			this.pixel=pixels;
		}
	}

	drawPoint(frame,x,y,paletteIndex) {
		this.pixels[x+y*this.width+frame*this.width*this.height]=paletteIndex;
	}

}

