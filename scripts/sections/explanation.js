let xScale = 1100 / 773.8;
let yScale = 800 / 355.2;

let allPoints = [
    {
        id: 0,
        type: 'attack',
        x: 578.5 * xScale,
        y: 145.2 * yScale,
        forces: [
            {i: 0, x: -0.72, y: -0.09},
            {i: 1, x: 7.6, y: -1.7},
            {i: 2, x: 13.2, y: 3.75},
            {i: 3, x: -1.3, y: -1.7},
            {i: 4, x: 17.1, y: -4.9}
        ],
    },
    {
        id: 1,
        type: 'train',
        x: 400.0 * xScale,
        y: 42.0 * yScale,
        forces: [
            {i: 0, x: -1.26, y: -17.74},
            {i: 1, x: -1.13, y: -17.79},
            {i: 2, x: -1.15, y: -17.77},
            {i: 3, x: -1.10, y: -17.80},
            {i: 4, x: -1.18, y: -17.73}
        ],
    },
];

const sceneAttacks1 = new SvgFileScene(
    d3.select("#svgAttacks1"),
    contourArea,
    "figs/intro/pes_above.png"
);
const sceneAttacks2 = new SvgFileScene(
    d3.select("#svgAttacks2"),
    contourArea,
    "figs/doublewell/example.png",
);
const sceneAttacks3 = new SvgFileScene(
    d3.select("#svgAttacks3"),
    contourArea,
    "figs/doublewell/example_train.png",
);

const sceneAttacks4 = new SvgFileScene(
    d3.select("#svgAttacks4"),
    contourArea,
    "figs/doublewell/example_attack.png",
);

const sceneLoop1 = new SvgFileScene(
    d3.select("#svgLoop1"),
    contourArea,
    "figs/intro/loop.png",
);
