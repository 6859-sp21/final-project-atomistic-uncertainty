// Scrolling functions  
let sections = d3.selectAll('.step');
let sectionPositions = [];
let startPos;

sections.each(function(d,i) {
    let top = this.getBoundingClientRect().top;
    //console.log(top)
    if(i === 0) {
        startPos = top;
    }
    sectionPositions.push(top - startPos);
});



let scroll = scroller();
scroll(d3.selectAll('.step'));
scroll.on('active', changeScenes);


function scroller() {
    //   let container = d3.select('body');
    // event dispatcher
    let dispatch = d3.dispatch('active', 'progress');

    // d3 selection of all the
    // text sections that will
    // be scrolled through
    let sections = null;

    // array that will hold the
    // y coordinate of each section
    // that is scrolled through
    //   let sectionPositions = [];
    let currentIndex = -1;
    // y coordinate of
    //   let containerStart = 0;

    /**
     * scroll - constructor function.
     * Sets up scroller to monitor
     * scrolling of els selection.
     *
     * @param els - d3 selection of
     *  elements that will be scrolled
     *  through by user.
     */
    function scroll(els) {
        sections = els;

        // when window is scrolled call
        // position. When it is resized
        // call resize.
        d3.select(window)
            .on('scroll.scroller', position);

        let timer = d3.timer(function () {
            position();
            timer.stop();
        });
    }


    /**
     * position - get current users position.
     * if user has scrolled to new section,
     * dispatch active event with new section
     * index.
     *
     */
    function position() {
        let pos = window.pageYOffset - 10;
        let sectionIndex = d3.bisect(sectionPositions, pos);
        sectionIndex = Math.min(sections.size() - 1, sectionIndex);

        if (currentIndex !== sectionIndex) {
            dispatch.call('active', this, sectionIndex);
            currentIndex = sectionIndex;
        }

        let prevIndex = Math.max(sectionIndex - 1, 0);
        let prevTop = sectionPositions[prevIndex];
        let progress = (pos - prevTop) / (sectionPositions[sectionIndex] - prevTop);
        dispatch.call('progress', this, currentIndex, progress);
    }

    /**
     * container - get/set the parent element
     * of the sections. Useful for if the
     * scrolling doesn't start at the very top
     * of the page.
     *
     * @param value - the new container value
     */
    //   scroll.container = function (value) {
    //     if (arguments.length === 0) {
    //       return container;
    //     }
    //     container = value;
    //     return scroll;
    //   };

    // @v4 There is now no d3.rebind, so this implements
    // a .on method to pass in a callback to the dispatcher.
    scroll.on = function (action, callback) {
        dispatch.on(action, callback);
    };

    return scroll;
}

