var curves = [];
var nx;
var ny;
var scl;
var per;

function setup() {
	canvas = createCanvas(600, 600);
	angleMode(DEGREES);
}

function draw() {
	background(233);
 	per = map(mouseX, 0, windowWidth, 0, 5); //scaling periodicity of curves according to mouseX position

	for (let i = 0; i < 12; i++){ //creating 12 rows of rectangles
		push();
		nx = 0;
		ny = i * 30; //spacing of curves in y direction
		translate(nx, ny);
		scl = i * 3; //amplitude increases with each progressive curve
		curves[i] = new Curve(6, scl, per); //adds new curve object to curves array
		curves[i].show();
		pop();
		per+=map(mouseY, 0, windowHeight, 0, 2); //scaling periodicity of curves according mouseY position, increasing with each successive curve
	}
}

function keyTyped() {
  	if (key === 's') {
   	 	save('canvas.png');
 	}
}

class Curve { //defines each row or curve of rectangles
	constructor(spacing, amplitude, period) {
		this.spacing = spacing;
		this.amplitude = amplitude;
		this.period = period;
	}

	show() {
		for (let x = 50; x < width - 50; x += this.spacing) { //number of rectangles in each curve
			stroke(0, 0, 255);
			strokeWeight(0.5);
			noFill();
			push();
			translate(x, sin(this.period*x)*this.amplitude +30);
			rect(0, 0, 2, 20);
			pop();
		}
	}
}
