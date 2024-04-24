const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
const [ xCenter, yCenter ] = [ windowWidth / 2, windowHeight / 2]
const backgroundColor = [0, 0, 0, 95];
const sphereSizeRange = [ 2, 10 ];
const numOfSpheres = 50;

let spheres = [];
let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(60)

    const spherePalette = spherePalettes[Math.floor(random(spherePalettes.length))]
    
    for (let sphere = 0; sphere < numOfSpheres; sphere++) {
        const sphereSize = random(sphereSizeRange);
        const colorNumber = Math.floor(random(spherePalette.length));
        const color = spherePalette[colorNumber];
        spheres.push(new Sphere(0, 0, sphereSize, color))
    }

    // Initialize a field of stars
    // const particleDensity = 50;
    // const particleSpacing = windowWidth / particleDensity;

    // for (let x = 0; x < windowWidth; x += particleSpacing) {
    //     for (let y = 0; y < windowHeight; y += particleSpacing) {
    //         const p = createVector(x, y);
    //         particles.push(p);
    //     }
    // }
}

function draw() {
    background(backgroundColor);
    
    // Render a field of stars
    // for (let p = 0; p < particles.length; p++) {
    //     ellipse(particles[p].x, particles[p].y, 2);
    // }

    translate(xCenter, yCenter);
    
    for (let s = 0; s < spheres.length; s++) {
        spheres[s].update();
        spheres[s].joinParticles(spheres.slice(s));
    }
}
