class Bob{
constructor(x,y,radius){
 var options={
     isStatic : true
 }  
 this.body = Bodies.circle(x,y,radius,options)  ;
 this.radius = 100
 World.add(world,this.body);
}
display(){
fill("pink");
var pos = this.body.position;
 ellipseMode(CENTER);
 ellipse(pos.x,pos.y,this.radius,this.radius)  ; 
}
}
