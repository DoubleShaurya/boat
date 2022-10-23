class CannonBall {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.r = 30;

        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(this.x, this.y, this.r, options);
        this.image = loadImage("assets/cannonball.png");
        World.add(world, this.body);
    }

    display () {
        var pos = this.body.position;
        
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }

    shoot () {
        var newAngle = cannon.angle - 28;
        newAngle *= 3.142/180;

        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5); // Multiply

        Body.setStatic(this.body, false);
        Body.setVelocity(this.body, {x:velocity.x * 180/3.142, y:velocity.y * 180/3.142});
    }
}