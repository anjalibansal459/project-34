class Superman{
    constructor(x,y,radius){
        var options={
            isStatic:false
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.x=x
        this.y=y
        this.radius=radius
        this.image=loadImage("hero image.jpg")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        imageMode(CENTER)
        fill("blue")
        image(this.image,pos.x,pos.y,this.radius,this.radius)
        pop()
    }
}