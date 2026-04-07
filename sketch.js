function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('projecta');
  background(0);
}

function draw() {
  ellipse (mouseX, mouseY, 50);
}
