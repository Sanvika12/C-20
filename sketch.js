var moving_Object, Target;


function setup() {
  createCanvas(800,400);
  moving_Object = createSprite(100, 350, 80, 80);
  Target = createSprite(350, 300, 90, 90);
  moving_Object.debug=true
  Target.debug=true

}

function draw() {
  background("Pink");  

  moving_Object.x = mouseX;
  moving_Object.y = mouseY;
  console.log(moving_Object.x-Target.x);
  if(moving_Object.x-Target.x<moving_Object.width/2+Target.width/2 
    && Target.x-moving_Object.x<moving_Object.width/2+Target.width/2
    && Target.y-moving_Object.y<moving_Object.height/2+Target.height/2
    && moving_Object.y-Target.y<moving_Object.height/2+Target.height/2){
    Target.shapeColor="white";
  }
  else{
    Target.shapeColor="purple";
  }

  drawSprites();
}