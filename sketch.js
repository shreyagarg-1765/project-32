const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,miniG,miniG2;
var block1,block2,block3,block4,block5,block6,block7,
block8,block9,block10,block11,block12,block13,
block14,block15,block16;

var block17,block18,block19,block20,block21,
block22,block23,block24,block25;

var ball;

var slingshot;

var score= 0;

function setup() {
  createCanvas(1000,800);
  
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400,580,1000,20);
  miniG=new Ground(640,250,220,20);
  miniG2=new Ground(330,450,250,20);

  block1=new Block(240,425,30,30);
  block2=new Block2(270,425,30,30);
  block3=new Block(300,425,30,30);
  block4=new Block2(330,425,30,30);
  block5=new Block(360,425,30,30);
  block6=new Block2(390,425,30,30);
  block7=new Block(420,425,30,30);

  block8=new Block2(270,395,30,30);
  block9=new Block(300,395,30,30);
  block10=new Block2(330,395,30,30);
  block11=new Block(360,395,30,30);
  block12=new Block2(390,395,30,30);

  block13=new Block(300,365,30,30);
  block14=new Block2(330,365,30,30);
  block15=new Block(360,365,30,30);

  block16=new Block2(330,335,30,30);

  block17=new Block(580,225,30,30);
  block18=new Block2(610,225,30,30);
  block19=new Block(640,225,30,30);
  block20=new Block2(670,225,30,30);
  block21=new Block(700,225,30,30);

  block22=new Block2(610,195,30,30);
  block23=new Block(640,195,30,30);
  block24=new Block2(670,195,30,30);

  block25=new Block2(640,165,30,30);

 // hexa=new Hexa (50,1000);

  //hexa=Bodies.rectangle(50,100,30,30);
  //fill(rgb(22,45,89));

 // World.add(world,hexa);
 ball=Bodies.circle(50,200,20);
 World.add(world,ball);

  slingshot = new SlingShot(ball,{x:200, y:100});
  
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(rgb(146,227,102)); 
  Engine.update(engine);
  strokeWeight(2);
  stroke("black");
  textSize(20);
  fill("pink");
  text("Score: "+ score, width-300,50);

// ball.display();
  /*var pos =hexa.position;
  rect(pos.x,pos.y, this.width, this.height);
  */

  ground.display();
  miniG.display();
  miniG2.display();  

  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();

  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  block25.display();
  block25.score();

  ellipse(ball.position.x,ball.position.y,20)

  /*imageMode(CENTER);
  image(hexaImg,hexa.positionX,hexa.positionY,40,40);
*/
  slingshot.display();

 
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode==32){
  slingshot.attach(ball);
  }
}