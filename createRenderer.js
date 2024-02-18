import * as THREE from 'three';

export const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth/2-1, window.innerHeight/2-1 );
  const rendererElement = renderer.domElement;
  rendererElement.style.marginLeft = "1px"
  rendererElement.style.marginBottom = "1px"

  const items = document.getElementById('items-container');
  items.appendChild(rendererElement);
  return renderer;
}