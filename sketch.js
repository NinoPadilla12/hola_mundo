function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(250, random(0, 20), 0);
  fill(0, mouseY, 255);
  circle(mouseX + 80, mouseY - 80, mouseX);
  fill(0, 250, 0);
  rect(mouseX, mouseY, 100, 100);
}
