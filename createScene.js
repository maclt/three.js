import * as THREE from 'three';

export function createScene() {
  // Instantiate scene
  const scene = new THREE.Scene();
  
  // Add axis
  scene.add(new THREE.AxesHelper(14))
  scene.background = new THREE.Color(0x666666);
      
  // Instantiate light
  const light = new THREE.PointLight(0xffffff, 5000)
  light.position.set(0, 40, 40)
  scene.add(light)
  
  return scene;
}