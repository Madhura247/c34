class rope{
    constructor(bodyA, pointB){
       var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:1.2,
           length:250
       }
       this.pointB=pointB;
       this.rope=Constraint.create(options);
       World.add(world, this.rope);


    }

    display() {
        var point = this.rope.bodyA.position;
        push()
        strokeWeight(3);
        stroke("black");
        line(point.x, point.y, this.pointB.x, this.pointB.y)
        pop();
    }
}