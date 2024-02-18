import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { createScene } from './createScene.js';
import { createRenderer } from './createRenderer.js';
import { createCamera } from './createCamera.js';
import { createControl } from './createControl.js';
import { createMaterial } from './createMaterial.js';
import { loadObject } from './loadObject.js';
import { createAnimate } from './createAnimate.js';

const datasets = {
  1: {
    obj: './static/cactus/Cactus1.obj',
    texture: './static/cactus/Default_Base_Color.png'
  },
  2: {
    obj: './static/cactus/Cactus1.obj',
    texture: './static/cactus/Default_Base_Color.png'
  },
  3: {
    obj: './static/cactus/Cactus1.obj',
    texture: './static/cactus/Default_Base_Color.png'
  },
  4: {
    obj: './static/cactus/Cactus1.obj',
    texture: './static/cactus/Default_Base_Color.png'
  }
}

for(let i = 0; i < 4; i++) {
  const scene = createScene();
  const camera = createCamera();
  const renderer = createRenderer();
  const control = createControl(camera, renderer);
  const material = createMaterial(datasets[i+1].texture);
  loadObject(datasets[i+1].obj, material, scene);
  const animate = createAnimate(control, scene, camera, renderer);
  animate();
}

