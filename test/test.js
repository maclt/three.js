import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
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
const light = new THREE.PointLight(0xffffff, 1000)
light.position.set(0, 40, 30)
scene.add(light)

// Instantiate controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 1, 0)


/**
 * Set Texture and Material
 * @tutorial https://ics.media/tutorial-three/material_variation/
 */

const texture = new THREE.TextureLoader().load('../static/cactus/Default_Base_Color.png')
const material = new THREE.MeshStandardMaterial({
	map: texture
});

// const material = new THREE.MeshBasicMaterial({
// 	color: new THREE.Color(Math.random(), Math.random(), Math.random()),
// });

// const material = new THREE.MeshNormalMaterial({
// 	color: new THREE.Color(Math.random(), Math.random(), Math.random()),
// });

// const material = new THREE.MeshLambertMaterial({
// 	color: new THREE.Color(Math.random(), Math.random(), Math.random()),
// });

// const material = new THREE.MeshPhongMaterial({
// 	color: new THREE.Color(Math.random(), Math.random(), Math.random()),
// });

// const material = new THREE.MeshToonMaterial({
// 	color: new THREE.Color(Math.random(), Math.random(), Math.random()),
// });

// const material = new THREE.MeshStandardMaterial({
// 	color: new THREE.Color(Math.random(), Math.random(), Math.random()),
// });

/**
 * Load 3D model
 * @tutorial https://www.cgtrader.com/items/1969587/download-page
 */

// const gltfLoader = new GLTFLoader();
// gltfLoader.load(
//   './Cactus1.gltf',
//   function(gltf){
//     scene.add(gltf);
//   },
//   function (xhr) {
// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
// 	},
// 	function (error) {
// 		console.log( 'An error happened', error );
// 	}
// )

const objLoader = new OBJLoader();
objLoader.load(
  '../static/cactus/Cactus1.obj',
  function(obj){
		// obj.children[0].material = marterialA
		// obj.children[1].material = marterialB
		// obj.children[2].material = marterialC

		obj.children.forEach(child => {
			child.material = material			
		});
		
    scene.add(obj);
  },
  function (xhr) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function (error) {
		console.log( 'An error happened', error );
	}
)


// const fbxLoader = new FBXLoader();
// fbxLoader.load(
//   './Cactus1.fbx',
//   function(fbx) {
//     // scene.add(fbx);
// 		console.log(fbx)
// 		console.log(new THREE.Mesh(fbx, material))
// 		scene.add(new THREE.Mesh(fbx, material))
//   },
//   function (event) {
// 		console.log((event.loaded / event.total * 100) + '% loaded');
// 	},
// 	function (error) {
// 		console.log('An error happened', error);
// 	}
// )


function animate() {
	requestAnimationFrame(animate);

  controls.update();
	renderer.render(scene, camera);
}

animate();
