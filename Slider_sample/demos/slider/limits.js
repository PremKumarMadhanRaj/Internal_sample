define(["require", "exports", "../../src/slider/slider"], function (require, exports, slider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Limits Slider sample
     */
    var slider01 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: 50,
        limits: { enabled: true, minStart: 20, minEnd: 80 },
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        type: 'MinRange'
    });
    slider01.appendTo('#slider01');
    var slider02 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: 50,
        limits: { enabled: true, minStart: 20 },
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        type: 'MinRange'
    });
    slider02.appendTo('#slider02');
    var slider03 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: 30,
        limits: { enabled: true, minEnd: 80 },
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        type: 'MinRange'
    });
    slider03.appendTo('#slider03');
    var slider04 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 70],
        limits: { enabled: true, minStart: 20, maxEnd: 80 },
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        type: 'Range'
    });
    slider04.appendTo('#slider04');
    var slider05 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 70],
        limits: { enabled: true, minStart: 20, minEnd: 40, maxStart: 60, maxEnd: 80 },
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        type: 'Range'
    });
    slider05.appendTo('#slider05');
    var slider06 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: 50,
        limits: { enabled: true, minStart: 20, minEnd: 80, startHandleFixed: true },
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
    });
    slider06.appendTo('#slider06');
    var slider07 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 70],
        limits: { enabled: true, minStart: 20, minEnd: 40, maxStart: 60, maxEnd: 80, startHandleFixed: true },
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        type: 'Range'
    });
    slider07.appendTo('#slider07');
    var slider08 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 70],
        limits: { enabled: true, minStart: 20, minEnd: 40, maxStart: 60, maxEnd: 80, endHandleFixed: true },
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        type: 'Range'
    });
    slider08.appendTo('#slider08');
    var slider09 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 70],
        limits: { enabled: true, minStart: 20, minEnd: 40, maxStart: 60, maxEnd: 80, startHandleFixed: true, endHandleFixed: true },
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        type: 'Range'
    });
    slider09.appendTo('#slider09');
});
