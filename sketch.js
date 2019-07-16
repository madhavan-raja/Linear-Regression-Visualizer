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
}

function mousePressed()
{
	points.push([mouseX, mouseY]);
}