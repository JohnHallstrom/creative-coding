function getComplementaryColors() {
    const primary = Math.floor(Math.random(Date.now()) * 360);
    const secondary = (primary + 120) % 360;
    const tertiary = (primary + 240) % 360;

    return [ primary, secondary, tertiary ];
}

let primary, secondary, tertiary;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSL);

    [ primary, secondary, tertiary ] = getComplementaryColors();
}

function draw() {
    if (frameCount % 100 == 0) {
        [ primary, secondary, tertiary ] = getComplementaryColors();
    }

    translate(width / 2, height / 2);

    background(primary, 20, 20);
    
    fill(secondary, 50, 50);
    circle(-width / 4, 0, 500)
    
    fill(tertiary, 50, 50);
    circle(width / 4, 0, 500)
}
