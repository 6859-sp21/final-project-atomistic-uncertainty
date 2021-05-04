const value = (x, y) => Math.sin(x + y) * Math.sin(x - y); 
const scale = 1/80;

const thresholds = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
const color = d3.scaleSequential([-5, 5], d3.interpolateSpectral);
const path = d3.geoPath();

let alldata = [grid(0)];
let allpoints = [
    {id:0, x: 500, y: 140},
    {id:1, x: 600, y: 240},
    {id:2, x: 184, y: 340},
    {id:3, x: 700, y: 540}
];
let iteration = [{value:1}]


class ContourScene extends Scene {
    constructor(svg, area, contourData, pointsData, title) {
        super(svg, area)
        this.contours = d3.contours()
            .size([area.width, area.height]);
        this.contourData = contourData;
        this.pointsData = pointsData;
        this.title = title
    }

    plotContour(i) {
        let g = this.svg
            .selectAll('g')
            .data(this.contourData)
            .join('g')
            .attr("stroke", "white")
            .attr("stroke-width", 0.03);

        for (const threshold of thresholds) {
            g.append("path")
                .attr("d", path(this.contours.contour(
                    this.contourData, threshold
                )))
                .attr("fill", color(threshold))
                .attr("opacity", d => i == 1 ? 1 : 0);
        }
    }

    plotCircles(i) {
        let circles = this.svg
            .selectAll("circle")
            .data(this.pointsData, d => d.id)
            .join("circle")
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr("r", 10)
            .attr("stroke", "none")
            .attr("fill", "black")
            .attr("opacity", d => i == 1 ? 1 : 0); 

        this.svg.selectAll("circle").each(function() {  
            this.parentNode.appendChild(this); 
        });
    }

    plotLabel(i) {
        let label = this.svg
            .selectAll('text')
            .data(iteration, data => data.value)
            .join('text')
            .attr('x', 0)
            .attr('y', height/20)
            .attr('fill', 'black')
            .attr('font-family', 'Helvetica Neue, Arial')
            .attr('font-size', 40)
            .attr("opacity", d => i == 1 ? 1 : 0)
            .text(`${this.title}`);
    }

    renderContour(i) {
        this.plotContour(i);
        this.plotCircles(i);
        this.plotLabel(i);
    }

    render() {
        super.render();

        this.renderContour(1);
    }
}

function grid (shift = 0) {
    const x0 = 0, x1 = 1000;
    const y0 = 0, y1 = 600;
    const n = Math.ceil((x1 - x0));
    const m = Math.ceil((y1 - y0));
    const grid = new Array(n * m);
    for (let j = 0; j < m; ++j) {
        for (let i = 0; i < n; ++i) {
            grid[j * n + i] = value(i * scale + shift, j * scale );
        }
    }
    return {id: shift, value: grid};
}

