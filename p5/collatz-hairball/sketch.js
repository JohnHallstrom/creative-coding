const startTime = performance.now();

const calculateCollatz = (number) => {
    return number % 2 == 0 ?
        (number / 2) :
        (number * 3 + 1) / 2
}
const getReversedCollatzSequence = (initialNumber) => {
    let number = initialNumber == 0 ? 1 : initialNumber;
    let numbers = [];

    do {
        number = calculateCollatz(number)
        numbers.push(number)
    } while (number != 1);

    return numbers.reverse();
}
const printRunTime = (startTime) => {
    const endTime = performance.now();
    console.log(`Execution time: ${Math.floor(endTime - startTime)} ms`)
}

const angle = Math.PI / 8;
const numOfOrigins = 10000;
const length = 10;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(60);
    noLoop();

    background(0)
    stroke(255, 50);
    strokeWeight(1);
}

function draw() {

    for (let number = 1; number < numOfOrigins; number++) {
        resetMatrix();
        translate(width / 2.2, height / 1.3);

        const sequence = getReversedCollatzSequence(number);

        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] % 2 == 0) {
                rotate(-angle);
            } else {
                rotate(angle);
            }

            line(0, 0, length, 0);
            translate(length, 0);
        }
    }
    
    printRunTime(startTime);
} 
