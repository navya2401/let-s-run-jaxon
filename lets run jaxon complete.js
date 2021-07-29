var track;
var boy;
var rightSideBoundary;
var leftSideBoundary;

function preload(){
  // track image
  trackImage = loadImage("path.png");

  //boy animation
  boyAnimation = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  //scrolling track
  track = createSprite(200, 200);
  track.addImage(trackImage);
  track.scale = 1.2;
  
  //boy sprite
  boy = createSprite(300, 320, 20, 50);
  boy.addAnimation("running", boyAnimation);
  boy.scale = 0.07;

  // invisible boundaries 
  rightSideBoundary = createSprite(390, 350, 150, 200);
  leftSideBoundary = createSprite(15, 350, 50, 200);
  rightSideBoundary.visible = false;
  leftSideBoundary.visible = false;
}

function draw() {
  background(0);

  // to make track infinite
  track.velocityY = -4;
  if(track.y < 200){
    track.y = track.height/2;
  }

  //to make boy move x position with mouse
  boy.x = mouseX;

  // to make boy collide with invisible boundaries
  boy.collide(leftSideBoundary, rightSideBoundary);

  drawSprites();
}
