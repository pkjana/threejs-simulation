/**
 * 
 *  Document     : controller.js
 *  Created on   : 29 Nov, 2015, 4:45:25 PM
 *  Author       : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */

/*---------------------------Don't edit this area ----------------------------*/
// Initialize Simulation on page load
function initializeSimulation() {
    CUBEScene.init();
    document.getElementById("clockwise").onclick = animateClockwise;
    document.getElementById("anti-clockwise").onclick = animateAntiClockwise;
    animate();
}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize")
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}
/*---------------------------Developer area start here------------------------*/

function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
    //document.getElementById("rangeValue1").value = sliderVal;
//    var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
//    cube.rotation.y += angleChange;
    CUBEScene.cube.rotation.y = +sliderVal * (Math.PI / 180);
    // render
    render();
}
var timer, count;
var animateClockwise = function () {
    clearInterval(timer); //clear timer
    count = -360;
    timer = setInterval(function () {
        CUBEScene.cube.rotation.y = +count * (Math.PI / 180);
        render();
        if (count >= 360)
            clearInterval(timer);
        else
            count = count + 1;
    }, 50);
}
var animateAntiClockwise = function () {
    
    clearInterval(timer); //clear timer
    count = 360;
    timer = setInterval(function () {
        CUBEScene.cube.rotation.y = +count * (Math.PI / 180);
        render();
        if (count <= -360)
            clearInterval(timer);
        else
            count = count - 1;
    }, 50);
}
