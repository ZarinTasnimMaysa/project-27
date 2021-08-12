class Bob{
    constructor(x,y){
      var options ={
          density:0.8,
          restitution:1,
          friction:0,
      }
        this.body=Bodies.circle(x,y,25,options)
       World.add (world,this.body)

    }
    display(){
        push()
        translate (this.body.position.x,this.body.position.y)
        ellipse (0,0,50)
        pop ()

        
    }
}
