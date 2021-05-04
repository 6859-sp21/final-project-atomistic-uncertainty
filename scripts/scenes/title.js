class TitleScene extends Scene {
    constructor(svg, area, title) {
        super(svg, area)

        this.addText(title);
    }

    addText(text) {
        this.svg.append('text')
            .attr('x', 100)
            .attr('y', 300)
            .attr('fill', 'black')
            .attr('font-family', 'Helvetica Neue, Arial')
            .attr('font-size', 80)
            .text(text);
    }
}
