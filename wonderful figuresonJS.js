var canvas = document.getElementById('c1');
// declare canvas
var ctx = canvas.getContext('2d');
// we work only with a variable ctx

var R = 38, r = 90, d = 90, teta = 0, timer;
// put the points on the field
function createuimage() {
	var x = (R-r)*Math.cos(teta) + d*Math.cos((R-r)*teta/r);
	var y = (R-r)*Math.sin(teta) - d*Math.sin((R-r)*teta/r);
	teta = teta +0.1;
	ctx.fillRect(300+x, 300+y, 4, 4);
	timer = setTimeout(createuimage, 20);
	ctx.fillStyle = "red";
}
createuimage();
