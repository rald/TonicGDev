function rnd(x) {
	return Math.floor(Math.random()*x);
}



function radians(degrees) {
	return degrees*Math.PI/180;
}



function degrees(radians) {
	return radians*180/Math.PI;
}



function inrect(x,y,rx,ry,rw,rh) {
	return x>=rx && x<=rx+rw && y>=ry && y<=ry+rh;
}
