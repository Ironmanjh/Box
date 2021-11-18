var box
function setup() {
  createCanvas(1200,1200);
  box=createSprite(600,600,200,200)
}

function draw() 
{
  background(30);
if(keyDown(RIGHT_ARROW)){
  box.position.x=box.position.x+2
}
if(keyDown(LEFT_ARROW)){
  box.position.x=box.position.x-2
}
if(keyDown(UP_ARROW)){
  box.position.y=box.position.y-2
}
if(keyDown(DOWN_ARROW)){
  box.position.y=box.position.y+2
}
drawSprites()
}




