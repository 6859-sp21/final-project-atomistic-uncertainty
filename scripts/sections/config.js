const height = window.height;
const width = window.width;

const area = {height: height, width:width};
const contourArea = area;

const sceneBlank = new TitleScene(
    d3.select("#svgBlank"),
    area, 
    "",
);