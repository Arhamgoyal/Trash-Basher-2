
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper_obj,ground_obj;
var dustbin_obj;


function setup() {
	createCanvas(1600, 1000);

	engine = Engine.create();
	world = engine.world;
  
  paper_obj = new Paper(100,600,50,50);
 
  dustbin_obj = new Dustbin(1000,670,150,150);
  
  ground_obj = new Ground(750,690,1600,40);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  Engine.update(engine);

      dustbin_obj.display();
      ground_obj.display();
      paper_obj.display();
}

function keyPressed(){

    if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper_obj.body,paper_obj.body.position,{x:45,y:-50})

}
}
