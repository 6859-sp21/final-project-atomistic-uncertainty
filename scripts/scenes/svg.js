class SvgFileScene extends Scene {
    constructor(svg, area, file) {
        super(svg, area)

        this.addFile(file);
    }

    addFile(file) {
        this.svg.append('image')
            .attr("xlink:href", file);
    }

    render () {
        d3.selectAll(".visuals")
            .transition()
            .duration(500)
            .attr("opacity", 0);

        this.svg
            .transition()
            .duration(300)
            .attr("opacity", 1);
    }
}


class SvgPlotScene extends SvgFileScene {
    constructor(svg, area, file, pointsData) {
        super(svg, area, file);
        this.pointsData = pointsData;
        this.tooltip = this.defineTooltip();
    }

    plotPoints() {
//        function toggleVisibility(data, vis) {
//            console.log('mouseover');
//            return this.tooltip.style("visibility", vis);
//        }

        let circles = this.svg
            .selectAll("points")
            .data(this.pointsData)
            .enter()
            .append("circle")
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr("r", 6.8)
            .attr("stroke", d => d.type == 'train' ? 'black' : 'white')
            .attr("fill", d => d.type == 'train' ? 'white' : 'black');
    }

    defineTooltip() {
        let tooltip = this.svg
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0)
            //.style("position", "absolute")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "10px");

        return tooltip
    }

    defineArrowHeads() {
        this.svg.append("defs").append("marker")
            .attr("id", "arrowhead")
            .attr("refX", 5)
            .attr("refY", 2)
            .attr("markerWidth", 6)
            .attr("markerHeight", 4)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M 0,0 V 4 L6,2 Z");

        this.svg.append("defs").append("marker")
            .attr("id", "whitearrowhead")
            .attr("refX", 5)
            .attr("refY", 2)
            .attr("markerWidth", 6)
            .attr("markerHeight", 4)
            .attr("orient", "auto")
            .attr("fill", "white")
            .append("path")
            .attr("d", "M 0,0 V 4 L6,2 Z");
    }

    plotArrows() {
        for (var i = 0; i < 5; i++) {
            this.svg
                .selectAll("circle")
                .data(this.pointsData)
                .join("path")
                .attr('d', d => this.getArrowLine(d, i))
                .attr("stroke", d => d.type == 'train' ? 'white' : 'black')
                .attr('stroke-width', 2)
                .attr("marker-end", d => d.type == 'train' ? 'url(#whitearrowhead)' : 'url(#arrowhead)')
                .attr('fill', 'none');
        }
    }

    getArrowLine(data, i) {
        const scale = 5;
        const start = [data.x, data.y];
        // The negative sign exists because SVG y axis increases to the bottom
        const length = [
            data.forces[i].x,
            -data.forces[i].y,
        ];
        const end = [
            start[0] + scale * length[0],
            start[1] + scale * length[1],
        ]

        return d3.line()([start, end])
    }

    render() {
        super.render();
        this.svg
            .attr("opacity", 0.6);

        this.defineArrowHeads();
        this.plotArrows();
        this.plotPoints();
    }

}
