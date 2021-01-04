var world
var ball, engine, World
var Engine=Matter.Engine;
var Bodies=Matter.Bodies;
var Constraint=Matter.Constraint;
var poly1, ground1, ground2;
function preload(){

}
function setup(){
createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
poly1=new Polygons(200,200,50,50);
box1=new Box(460,270,40,40);
box2=new Box(500,270,40,40)
box3=new Box(540,270,40,40)
box4=new Box(480,230,40,40)
box5=new Box(520,230,40,40)
box6=new Box(500,190,40,40)
box7=new Box(960,170,40,40);
box8=new Box(1000,170,40,40)
box9=new Box(1040,170,40,40)
box10=new Box(980,130,40,40)
box11=new Box(1020,130,40,40)
box12=new Box(1000,90,40,40)
ground1= new Ground(1000,200,250,20)
ground2=new Ground(500,300,250,20)
slingshot= new Constraints(poly1.body,{x:200,y:200})
}
function draw(){
  background(200);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
   box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
slingshot.display();
poly1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(poly1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(poly1.body,{x:200, y:200})
   slingshot=new Constraints(poly1.body,{x:200,y:200});
  }
  }