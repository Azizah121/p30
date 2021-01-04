class Box{
    constructor(x,y,w,h){
        var option={
             friction:0.0,
             restitution:0.4
         };
         this.visibility=225;
 this.body=Matter.Bodies.rectangle(x,y,w,h, option);
 this.width=w;
 this.height=h;
 Matter.World.add(world,this.body);
 }
 display(){
 var pos=this.body.position;
 var angle=this.body.angle;
 if(this.body.speed>7.6){
    this.invisibility=this.invisibility-1;
    tint(255,this.invisibility);}
 rectMode(CENTER);
 push();
 stroke("green");
 rotate(angle);
 rectMode(CENTER);
 rect(pos.x,pos.y,this.width, this.height);
 pop();
 }
 else(){
     World.remove(world,this.body);
     push();
     this.visibility=this.visibility-5;
     pop();
 }
 }
