class PlayerBase{
constructor(x,y,width,height,options){

var options={
isStatic:true
}
this.body= Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("./assets/base2.png");
World.add(world,this.body);


}

display() {
var pos=this.body.position
var ang= this.body.angle
push();
translate (pos.x,pos.y);
rotate (ang);
imageMode(CENTER)
image(this.image,0,0,this.width,this,height)
pop()




}





}