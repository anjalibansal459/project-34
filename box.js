class Box {
    constructor(x,y,width,height){
        var options={
            restituton:0.8,
            fricton:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        
        push()
        
       
        fill("red")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
pop()
    }
}