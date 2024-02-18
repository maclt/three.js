import * as THREE from 'three';

export const createMaterial = (textureUri) => {
  const texture = new THREE.TextureLoader().load(textureUri)
  const material = new THREE.MeshStandardMaterial({
	  map: texture
  });

  return material
}