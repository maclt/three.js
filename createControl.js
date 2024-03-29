import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const createControl = (camera, renderer) => {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.target.set(0, 1, 0)
  return controls;
}