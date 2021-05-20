class Block2{
    constructor(x,y,width,height){
        var options={
            'restitution':0.4,
            'friction':1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        if(this.body.speed<3){
        
            //translate(this.body.position.x, this.body.position.y);
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill(rgb(255,192,203));
            rect(0,0, this.width, this.height);
            pop();
          
                
              }
              else{
                World.remove(world,this.body);
                push();
                this.visibility=this.visibility-5;
               tint(255,this.visibility);
                //image(this.image,this.body.position.x,this.body.position.y);
                pop();
              }
              
            
    }
    score(){
        if(this.Visibility<0 && this.Visibility> -105){
          score++;
        }
      }
}