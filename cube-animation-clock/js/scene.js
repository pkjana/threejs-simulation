/**
 * 
 *  Document     : scene.js
 *  Created on   : 29 Nov, 2015, 4:45:25 PM
 *  Author       : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */

/* global flag */
var raf = undefined;

var CUBEScene = {
    scene: null,
    camera: null,
    container: null,
    stats: null,
    controls: null,
    renderer: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,
    cube: null,
    light: null,
    init: function () {

//        create main scene
        this.scene = new THREE.Scene();

        this.container = document.getElementById("canvas3d-view");

        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;


//  renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
        this.renderer.setClearColor(0x000000, 1); // Set the background color of the canvas to black
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container.appendChild(this.renderer.domElement);

// camera
        var VIEW_ANGLE = 45, ASPECT = this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        //this.camera.position.z = 500;
        this.camera.position.set(0, 0, 1000);
        //this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.camera.lookAt(this.scene.position);
//        this.scene.add(this.camera);


        // And some sort of controls to move around
        // We'll use one of THREE's provided control classes for simplicity
        this.controls = new THREE.TrackballControls(this.camera);

        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;

        this.controls.noZoom = false;
        this.controls.noPan = false;

        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;

        this.controls.keys = [65, 83, 68];
        this.controls.enabled = false;
        // this.controls.addEventListener('change', render);

// Stats preparing
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = '88px';
        this.container.appendChild(this.stats.domElement);


// Add axes, The X axis is red. The Y axis is green. The Z axis is blue.
        axes = buildAxes(200);
        this.scene.add(axes);
// cube
        this.cube = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshNormalMaterial());
        this.cube.overdraw = true;
        this.scene.add(this.cube);

// create lights
        this.scene.add(new THREE.AmbientLight(0xff0040));

        this.light = new THREE.PointLight(0xffffff, 6, 40);
        this.light.position.set(20, 20, 20);
        this.scene.add(this.light);

        this.container.addEventListener('mouseover', onContainerMouseOver, false);
        this.container.addEventListener('mouseout', onContainerMouseOut, false);

//        this.container.onmouseover = onContainerMouseOver;
//        this.container.onmouseout = onContainerMouseOut;
//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};

function onContainerMouseOver() {
    CUBEScene.controls.enabled = true;
}
function onContainerMouseOut() {
    CUBEScene.controls.enabled = false;
}

// Animate the scene
function animate() {
    if (animationMode === "clockwise") {
        animateClockwiseImpl();
    }
    if (animationMode === "anticlockwise") {
        animateAntiClockwiseImpl();
    }
    update();
    // render the scene
    render();
//    call the loop function again
    raf = requestAnimationFrame(animate);
}

// Update controls and stats
function update() {
//    AXISCubeScene.controls.update(AXISCubeScene.clock.getDelta());
    CUBEScene.controls.update();
    CUBEScene.stats.update();
}
// Render the scene
function render() {
    if (CUBEScene.renderer) {
        CUBEScene.renderer.render(CUBEScene.scene, CUBEScene.camera);
    }
}
