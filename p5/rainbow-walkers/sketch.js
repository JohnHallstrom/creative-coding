const colorMode = {
    randomColor: 1,
    perlinNoise: 2,
}

const numberOfWalkers = 50;
const walkerSize = 10;
const backgroundColor = 0;


let walkers = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(backgroundColor);

    for (let i = 0; i < numberOfWalkers; i++) {
        walkers.push(new Walker());
    }
}

function draw() {
    for (let i = 0; i < walkers.length; i++) {
        walkers[i].update(colorMode.perlinNoise);
        walkers[i].move(walkerSize);
    }
}
