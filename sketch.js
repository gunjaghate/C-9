var bird;

function preload()
{
  img = loadImage("Tree_House.jpg")
}

function setup() {
  createCanvas(400, 400);
  bird = createSprite(200,200,100,100)
  bird.addImage("bird",img)
}

function draw() {
  background(220);
  image(img,100,100,150,150);
}