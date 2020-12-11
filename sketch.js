
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var tree1,ground1,stone1;
var mango1,mango2,mango3,mango4,mango5;
var slingShot,stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
tree1=new Tree(500,150,150,150)
ground1=new Ground(400,360,900,100)
stone1=new Stone(200,200,20)
mango1=new Mango(520,200,30,30)
mango2=new Mango(545,200,30,30)
mango3=new Mango(560,210,30,30)
mango4=new Mango(590,210,30,30)
mango5=new Mango(575,210,30,30)
sling1= new SlingShot (stone1.body,{x:200,y:100});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree1.display();
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling1.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	
	
	}



	function mouseReleased(){
		sling1.fly();
		
		}
		


		function detectCollision(Lstone,Lmango){

			mangoBodyPosition=Lmango.body.position

			stoneBodyPosition=Lstone.body.position


			var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

			if(distance<=Lmango.r+Lstone.r){
				Matter.Body.setStatic(Lmango.body,false);




			}







			function keyPressed(){

				if(keyCode === 32){
					Matter.Body.setPosition(stone1.body,{x:235,y:420})

					launcherObject.attach(stone1.body);

				}



			}




























		}
		


















