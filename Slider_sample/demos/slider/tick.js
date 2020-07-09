define(["require", "exports", "../../src/slider/slider"], function (require, exports, slider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Default Slider sample
     */
    var slider = new slider_1.Slider({
        min: 0,
        max: 100,
        value: 45,
        ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    slider.appendTo('#slider');
    var slider1 = new slider_1.Slider({
        value: [25, 40],
        type: 'Range',
        ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    slider1.appendTo('#slider-02');
    var slider2 = new slider_1.Slider({
        type: 'MinRange',
        ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    slider2.appendTo('#slider-03');
    var slider3 = new slider_1.Slider({
        value: 10,
        tooltip: { placement: 'Before', isVisible: true },
        showButtons: true,
        ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    slider3.appendTo('#slider-04');
    var slider4 = new slider_1.Slider({
        value: 10,
        tooltip: { placement: 'After', isVisible: true },
        showButtons: true,
        type: 'Range',
        ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    slider4.appendTo('#slider-05');
    var slider5 = new slider_1.Slider({
        value: 10,
        tooltip: { placement: 'Before', isVisible: true },
        showButtons: true,
        ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    slider5.appendTo('#slider-06');
    var slider6 = new slider_1.Slider({
        value: 10,
        tooltip: { placement: 'After', isVisible: true },
        showButtons: true,
        type: 'Range',
        ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    slider6.appendTo('#slider-07');
});
