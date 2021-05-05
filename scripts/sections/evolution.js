const sceneGen1 = new SvgFileScene(
    d3.select("#svgGen1"),
    contourArea,
    "figs/doublewell/gen1.svg",
);
const sceneGen2 = new SvgFileScene(
    d3.select("#svgGen2"),
    contourArea,
    "figs/doublewell/gen2.svg",
);
const sceneGen3 = new SvgFileScene(
    d3.select("#svgGen3"),
    contourArea,
    "figs/doublewell/gen3.svg",
);
const sceneGen4 = new SvgFileScene(
    d3.select("#svgGen4"),
    contourArea,
    "figs/doublewell/gen4.svg",
);
const sceneGen5 = new SvgFileScene(
    d3.select("#svgGen5"),
    contourArea,
    "figs/doublewell/gen5.svg",
);
const sceneGen6 = new SvgFileScene(
    d3.select("#svgGen6"),
    contourArea,
    "figs/doublewell/gen6.svg",
);
const sceneGen7 = new SvgFileScene(
    d3.select("#svgGen7"),
    contourArea,
    "figs/doublewell/gen7.svg",
);


const svg_array = [d3.select("#svg1"), d3.select("#svg2"), d3.select("#svg3"), d3.select("#svg4")];
const file_array = ["figs/doublewell/gen1.svg", "figs/doublewell/gen2.svg", "figs/doublewell/gen3.svg", "figs/doublewell/gen4.svg"];

const slide = new SvgSlider(
    d3.select("#slider"),
    contourArea,    
);

const sceneEvolution = new SvgEvolutionScene(
    svg_array,
    contourArea,
    file_array    
);