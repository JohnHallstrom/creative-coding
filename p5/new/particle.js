class Node {
    constructor(x = 0, y = 0) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.velocityFactor = 0.7;
    }

    update(body, node) {
        let diff = createVector();
        let forces  = createVector();

        let distance;

        for (let n = 0; n < body.length; n++) {
            if (body[n] != this) {
                diff = body[n].position.copy();
                diff.sub(this.position)
                distance = diff.mag();

                if (distance < repulsionDistance) {
                    diff.normalize();
                    diff.mult(-1/distance ** 2);

                    forces.add(diff);
                }
            }
        }

        // Calculate neighbor one's particle force
        let neighborOne = (node + 1) % body.length;
        const neighborOneTemp = body[neighborOne];
        diff = neighborOneTemp.position.copy();
        diff.sub(this.position);
        distance = diff.mag();
        diff.normalize();
        diff.mult(1.0/distance ** 2);

        if (distance < insertionDistance / 2) {
            diff.mult(-1);
        }

        forces.add(diff);
        
        // Calculate neighbor two's particle force
        let neighborTwo = ((node - 1) + body.length) % body.length;
        const neighborTwoTemp = body[neighborTwo];
        diff = neighborTwoTemp.position.copy();
        diff.sub(this.position);
        distance = diff.mag();
        diff.normalize();
        diff.mult(1.0/distance ** 2);

        if (distance < insertionDistance / 2) {
            diff.mult(-1);
        }

        forces.add(diff);

        let acceleration = createVector();
        forces.mult(kFactor);
        acceleration = forces.copy();
        acceleration.div(1);
        this.velocity.add(acceleration);
    }

    updatePosition() {
        this.position.add(this.velocity);
        this.velocity.mult(this.velocityFactor);
    }

    show() {
        circle(this.position.x, this.position.y, 6);
    }
}
