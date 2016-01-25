/**
 * 
 *  Document     : controller.js
 *  Created on   : 29 Nov, 2015, 4:45:25 PM
 *  Author       : pkjana
 *  Organization : IIT Khatagpur
 *  
 */


// Initialize Simulation on page load
function initializeSimulation() {
    CUBEScene.init();
    canvas2d.init();
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


function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
    document.getElementById("rangeValue1").value = sliderVal;
//    var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
//    cube.rotation.y += angleChange;
    CUBEScene.cube.rotation.y = +sliderVal * (Math.PI / 180);
    // render
    render();
}
