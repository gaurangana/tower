class Ground{
 constructer() {
var option = {
    isStatic: true 
}

this.ground= Bodies.rectangle(450,390,900,20,option)  ;
World.add(world.this.ground) ;

 }
 display(){
     noStroke() ;
     fill(188,67,67) ;
     rectMode(CENTER);
     rect(this.ground.position.x , his.ground.position.y,900,20)
 }
}