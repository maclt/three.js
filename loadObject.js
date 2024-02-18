import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

export const loadObject = (objUri, material, scene) => {
  const objLoader = new OBJLoader();
  objLoader.load(
    objUri,
    function(obj){  
  		obj.children.forEach(child => {
  			child.material = material			
  		})
      scene.add(obj);
    },
    function (xhr) {
  		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  	},
  	function (error) {
  		console.log( 'An error happened', error );
  	}
  ) 
}
