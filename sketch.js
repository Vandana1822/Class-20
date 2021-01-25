var fixedRect, movingRect;

function setup() {
  createCanvas(600, 600);
  fixedRect = createSprite(300, 200, 50, 150);
  movingRect = createSprite(500, 400, 150, 50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2 &&
    fixedRect.y - movingRect.y < movingRect.height / 2 + fixedRect.height / 2) {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "grey";
  }

  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "red";
  }
  drawSprites();
}
