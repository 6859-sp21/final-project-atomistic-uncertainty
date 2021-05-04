class Scene {
    constructor(svg, area) {
        this.svg = svg
            .attr('width', area.width)
            .attr('height', area.height);
    }

    get canvas() {
        return this.svg;
    }

    render () {
        d3.selectAll(".visuals")
            .transition()
            .duration(0)
            .attr("opacity", 0);

        this.svg
            .transition()
            .duration(0)
            .attr("opacity", 1);
    }
}

