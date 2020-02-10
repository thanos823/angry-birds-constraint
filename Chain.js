class Chain {
    
        constructor(bodyA, bodyB){ var options = { bodyA: bodyA, bodyB: bodyB, stiffness: 0.04, length: 10 }
        this.chain = Matter.Constraint.create (options);
        World.add(world,this.chain);
    }
    display(){
        strokeWeight(12)
        var pointb = this.chain.bodyB.position;
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,pointb.x,pointb.y);
    }
}