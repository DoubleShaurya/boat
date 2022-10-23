class Boat {
    constructor(x, y, width, height, boatPos) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.boatPos = boatPos;

        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("./assets/boat.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, this.boatPos, this.width, this.height);

        pop();
    }
}