/**
 * 
 *  Document     : controller.js
 *  Created on   : 29 Nov, 2015, 4:45:25 PM
 *  Author       : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */

/*---------------------------Don't edit this area ----------------------------*/
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

/**
 * Initialize Simulation on page load
 * 
 * @returns {undefined}
 */
function initializeSimulation() {
    CUBEScene.init();
    document.getElementById("clockwise").onclick = animateClockwiseCtrl;
    document.getElementById("anti-clockwise").onclick = animateAntiClockwiseCtrl;
    render();
}

/**
 * Action will take place when windo resize
 * 
 * @returns {undefined}
 */
function onWindowResize() {
    console.log(Date() + " resize")
}

/*---------------------------Developer area start here------------------------*/

function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
//    console.log("Slider val: " + sliderVal);
//    document.getElementById("rangeValue1").value = sliderVal;
//    var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
//    cube.rotation.y += angleChange;
    CUBEScene.cube.rotation.y = +sliderVal * (Math.PI / 180);
//    render
    render();
}

var count, animationMode = undefined;
/**
 * Clockwise Controller
 * 
 * @returns {undefined}
 */
var animateClockwiseCtrl = function () {
    animationMode = "clockwise";
    count = -360;
    animate();
};
/**
 * Anti Clockwise Controller
 * 
 * @returns {undefined}
 */
var animateAntiClockwiseCtrl = function () {
    animationMode = "anticlockwise";
    count = 360;
    animate();
};
/**
 * Clockwise Implementation
 * 
 * @returns {undefined}
 */
var animateClockwiseImpl = function () {
    CUBEScene.cube.rotation.y = +count * (Math.PI / 180);
    if (count >= 360) {
        cancelAnimationFrame(raf);
        animationMode = undefined;
        raf = undefined;
    } else {
        count = count + 1;
    }

};
/**
 * Anti Clockwise Implementation
 * 
 * @returns {undefined}
 */
var animateAntiClockwiseImpl = function () {
    CUBEScene.cube.rotation.y = +count * (Math.PI / 180);
    if (count <= -360) {
        cancelAnimationFrame(raf);
        animationMode = undefined;
        raf = undefined;
    } else {
        count = count - 1;
    }
};