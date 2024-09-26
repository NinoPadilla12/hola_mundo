function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(100, random(100, 200), 100, 10);

  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(random(0, 20));
  noFill(0);
  rect(mouseX, mouseY, 200, mouseY, 0, mouseY, 0, mouseX);

  // Style the Pacman arc.
  noStroke();
  fill(255, 255, random(0, 255));

  // Update start and stop angles.
  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
  let endAngle = TWO_PI - startAngle;

  // Draw the arc.
  arc(mouseX, mouseY, 80, 80, startAngle, endAngle, PIE);
}
