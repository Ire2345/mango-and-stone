class Tree{

constructor(x,y,width,height){

var options={
    isStatic:true	
}
this.image=loadImage("tree.png")



this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body)




























}

display(){



    var treePos=this.body.position;		

    push()
    translate(treePos.x, treePos.y);
    rectMode(CENTER)
    //strokeWeight(4);
    image(this.image,0,0,this.width, this.height)
    pop()













}






































































}


































































