let points = [];

function setup()
{
	createCanvas(600, 600);
}

function draw()
{
	background(0);

	for (i = 0; i < points.length; i++)
	{
		let cur = points[i];
		ellipse(cur[0], cur[1], 10, 10);
	}

	let n = points.length;
	let sumxy = 0;
	let sumx = 0;
	let sumxq = 0;
	let sumy = 0;

	for (i = 0; i < n; i++)
	{
		let cur = points[i];
		sumxy += cur[0] * cur[1];
		sumx += cur[0];
		sumxq += cur[0] * cur[0];
		sumy += cur[1];
	}

	let m = (n * sumxy - sumx * sumy) / (n * sumxq - sumx * sumx);
	let c = (sumy - m * sumx) / n;

	stroke(255);
	strokeWeight(2);
	line(0, c, 600, m * 600 + c);
}

function mousePressed()
{
	points.push([mouseX, mouseY]);
}
