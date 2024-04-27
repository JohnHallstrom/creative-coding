p5.disableFriendlyErrors = true;
const lowerFrameLimit = 20;
const visualizeNodes = false;

function getComplementaryColors() {
    const primary = Math.floor(Math.random(Date.now()) * 360);
    const secondary = (primary + 180) % 360;

    return [ primary, secondary ];
}

function printRenderInfo() {
    if (frameCount % 50 == 0) {
        console.log(`Framerate: ${Math.floor(frameRate())} - node count: ${body.length}`);
    }
    if (frameRate() < lowerFrameLimit) {
        noLoop();
        console.log(`Dropped below ${lowerFrameLimit} FPS. Stopped render on frame: ${frameCount}.`);
    }
}

const body = [];
let primaryColor, secondaryColor;
const insertionDistance = 15;
const repulsionDistance = insertionDistance * 5;
const initialNodes = 3;
const kFactor = 15;
let radius = 40;
let angle = 0;

function setup() {
    [ primaryColor, secondaryColor ] = getComplementaryColors();
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSL);
    frameRate(60);
    background(primaryColor, 20, 20);

    for (let i = 0; i < initialNodes; i++) {
        angle = map(i, 0, initialNodes, 0, 2 * Math.PI);
        radius = 40 + Math.random();

        body.push(new Node(
            width / 2 + radius * Math.cos(angle),
            height / 2 + radius * Math.sin(angle)
        ));
    }
}

function draw() {
    printRenderInfo();

    for (let n = 0; n < body.length; n++) {
        const particle = body[n];
        const nextParticle = body[(n + 1) % body.length];
    
        stroke(
            secondaryColor, 
            50, 
            40 + (Math.sin(frameCount / 100) * 20), 
            0.5
        );
        line(particle.position.x, particle.position.y, nextParticle.position.x, nextParticle.position.y);
    }

    for (let n = 0; n < body.length; n++) {
        if (visualizeNodes) {
            body[n].show();
        }

        body[n].update(body, n);
    }

    for (let n = 0; n < body.length; n++) {
        body[n].updatePosition(body);   
    }

    insertNodes(body);
}

function insertNodes(body) {
    for (let n = 0; n < body.length; n++) {
        const particle = body[n];
        const nextParticle = body[(n + 1) % body.length];
        
        let diff = createVector();
        diff = nextParticle.position.copy();
        diff.sub(particle.position);

        if (diff.mag() > insertionDistance) {
            diff.mult(0.5);
            body.splice((n + 1) % body.length, 0, new Node(
                particle.position.x + diff.x,
                particle.position.y + diff.y,
            ))
        }
    }
}
