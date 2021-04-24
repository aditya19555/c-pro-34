//Create variables here


var dog,dogimg
function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 800);
  dog =new Dog(400,400,20,20);
}


function draw() {  

  drawSprites();
  //add styles here
dog.display()
}



