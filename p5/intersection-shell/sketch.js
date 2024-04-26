function setup() {
    createCanvas(window.innerWidth, window.innerHeight);    
    frameRate(60);
    stroke(255);
    noFill();
}

function draw() {
    translate(width / 2, height / 2);
    background(0, 0, 0);

    console.log(frameRate());

    for (let i = 0; i < 50; i++) {
        const xOffset = sin(i * frameCount / 500) * i;
        const yOffset = cos(i * frameCount / 500) * i;
        ellipse(0 + xOffset, 0 + yOffset, 10 * i);
    }
}

