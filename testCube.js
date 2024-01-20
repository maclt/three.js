import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Instantiate scene
const scene = new THREE.Scene();

// Add axis
scene.add(new THREE.AxesHelper(14))
scene.background = new THREE.Color(0x555555);

// Instantiate renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Instantiate camera
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

// Adjust camera position
camera.position.x = 20;
camera.position.y = 20;
camera.position.z = 20;

// Instantiate light
const light = new THREE.PointLight(0xffffff, 500)
light.position.set(0, 40, 30)
scene.add(light)

// Instantiate controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 1, 0)


// Create a box
const geometry = new THREE.BoxGeometry(3, 5, 5);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animate
function animateCube() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}

function animate() {
	requestAnimationFrame(animate);

	animateCube();

  controls.update();
	renderer.render(scene, camera);
}

animate();
