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
}
