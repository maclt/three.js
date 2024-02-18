import * as THREE from 'three';

export const createCamera = () => {
  // Instantiate camera
  const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  // Adjust camera position
  camera.position.x = 20;
  camera.position.y = 20;
  camera.position.z = 20;

  return camera;
}
