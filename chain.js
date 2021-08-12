class Chain {
constructor(body1,body2,xoffset){
 var options ={
     bodyA: body1,
     bodyB : body2,
 pointB : {x:xoffset,y:0}
 }
   this.xoffset = xoffset
 this.chain = Constraint.create(options)
 World.add (world,this.chain)

}
display (){
    var point1 = this.chain.bodyA.position
    var point2 = this.chain.bodyB.position
    stroke ("red")
    line (point1.x,point1.y,point2.x+this.xoffset,point2.y)


}






}