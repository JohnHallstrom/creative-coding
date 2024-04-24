class Sphere {
    constructor(xPosition = 0, yPosition = 0, radius = 10, color = [255, 255, 255]) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.radius = radius;
        this.color = color;
        this.angleOffset = map(random(), 0, 1, 0, 360);
        this.speedOffset = random();
    }

    update(){
        fill(this.color)
        rotate(this.angleOffset)
        stroke(this.color);

        const waveSin = sin(radians(frameCount * this.speedOffset)) * 100;
        const waveCos = cos(radians(frameCount * this.speedOffset)) * 100;
        const waveTan = tan(radians(frameCount * this.speedOffset)) * 100;

        const newXPosition = this.xPosition + waveSin;
        const newYPosition = this.yPosition + waveCos + waveTan

        circle(newXPosition, newYPosition, this.radius);
    }

    joinParticles(particles) {
        particles.forEach(element => {
            if (this.color !== element.color) {
                return;
            }

            let distance = dist(this.xPosition, this.yPosition, element.xPosition, element.yPosition);

            if(distance < 85) {
                stroke(this.color);

                // There's a dot rendered in the middle of the frame becauase they all start at x = 0, y = 0
                // line(this.xPosition, this.yPosition, element.xPosition, element.yPosition);
          }
        });
      }
}
