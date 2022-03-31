class Players {
    constructor(x,y,w,h,image1){
     var options = {
         density:2.0,
         restitucion:0.5,
     }
     this.body = Bodies.rectangle(x,y,w,h,options);
     this.x = x
     this.y = y
     this.w = w
     this.h = h
     this.image = loadImage(image1);
    
     World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
            imageMode(CENTER);
            noStroke();
            fill("black");
            image(this.image,pos.x, pos.y,this.w,this.h);
        pop();
    }
}