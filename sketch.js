
var music;
var box
var rect1
var rect2
var rect3 
var rect4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(windowWidth,windowHeight);

    //create 4 different surfaces
      rect1 = createSprite(windowWidth/8*7,10,windowWidth/4,10);
      rect1.shapeColor = rgb(0,255,0);

      rect4 = createSprite(windowWidth/8*5, 10,windowWidth/4,10);
      rect4.shapeColor = rgb(255,0,0);

      rect3 = createSprite( windowWidth/8*3, 10,windowWidth/4,10);
      rect3.shapeColor = rgb(0,0,255);

      rect2 = createSprite(windowWidth/8,10,windowWidth/4,10);
      rect2.shapeColor = rgb(255,255,0);

    //create box sprite and give velocity
    box = createSprite(Math.round(random(windowWidth,windowHeight)),windowHeight-windowHeight + 500)
    box.velocityX= Math.round(random(-3,3))
    box.velocityY = -5
}

function draw() {
   
    background(rgb(169,169,169));
   
    //add condition to check if box touching surface and make it change colors

    if(box.isTouching(rect1)){
      box.shapeColor = rgb(0,255,0);

      
      box.velocityY=0
        box.velocityX = 0
    }

    if(box.isTouching(rect2)){
        box.shapeColor = rgb(255,255,0);
        
        box.velocityY=0
        box.velocityX = 0
      }
      if(box.isTouching(rect3)){
        box.shapeColor = rgb(0,0,255);
        
        box.velocityY=0
        box.velocityX = 0
      }

      if(box.isTouching(rect4)){
        box.shapeColor = rgb(255,0,0);
      
        box.velocityY=0
        box.velocityX = 0
      }
     drawSprites()
}
