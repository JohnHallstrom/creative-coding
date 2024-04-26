class Walker {
    constructor() {
        this.xPosition = width / 2;
        this.yPosition = height / 2;
        this.size = 10;

        this.rNoise = 0;
        this.gNoise = 0;
        this.bNoise = 0;
    }

    update(colorChoice) {
        if (colorChoice == 1) {
            fill(random(0, 255), random(0, 255), random(0, 255));
            stroke(random(0, 255), random(0, 255), random(0, 255));
        } else if (colorChoice == 2) {
            let rColorChange = noise(this.rNoise);
            rColorChange = map(rColorChange, 0, 1, 0, 255);

            let gColorChange = noise(this.gNoise);
            gColorChange = map(gColorChange, 0, 1, 0, 255);

            let bColorChange = noise(this.bNoise);
            bColorChange = map(bColorChange, 0, 1, 0, 255);

            fill(rColorChange, gColorChange, bColorChange);
            stroke(rColorChange, gColorChange, bColorChange);
        } else {
            fill(255);
            stroke(255);
        }

        ellipse(this.xPosition, this.yPosition, this.size, this.size);

        this.rNoise += 0.001;
        this.gNoise += 0.002;
        this.bNoise += 0.003;
    }

    move(_size) {
        this.size = _size;
        const steps = this.size / 4;

        let choice = int(random(4));

        if (choice == 0) {
            this.xPosition += steps;
        } else if (choice == 1) {
            this.xPosition -= steps;
        } else if (choice == 2) {
            this.yPosition += steps;
        } else if (choice == 3) {
            this.yPosition -= steps;
        }

        this.xPosition = constrain(this.xPosition, 0 + this.size, width - this.size);
        this.yPosition = constrain(this.yPosition, 0 + this.size, height - this.size);
    }
}
