var moving_rect
var fixed_rect



function setup() {
 createCanvas(1200,800);
 fixed_rect=createSprite(400, 200, 100, 50);
 fixed_rect.shapeColour="green"
 moving_rect=createSprite(800, 200, 100, 50);
 moving_rect.shapeColour="green"
}

function draw() {
  background(255,255,255);  
  
  moving_rect.x=World.mouseX;
  moving_rect.y=World.mouseY;
  
  if(moving_rect.x-fixed_rect.x<moving_rect.width/2+fixed_rect.width/2 &&
  moving_rect.x-fixed_rect.x<moving_rect.width/2+fixed_rect.width/2){

    moving_rect.shapeColor="red" 
    fixed_rect.shapeColor="red"
  }

    else { 
      moving_rect.shapeColor="green"
     fixed_rect.shapeColor="green"  
    }




  

  
  drawSprites();
}