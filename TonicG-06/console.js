class Console {
	constructor(width,height) {
		this.width=width;
		this.height=height;
		this.screen=new Array(width*height);
		this.attrib=new Array(width*height);
	}
}
