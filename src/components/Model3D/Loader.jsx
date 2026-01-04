import * as THREE from 'three';

export const loadModel = (scene, loader, modelState, startBlink) => {
  loader.load(
    '/models/head.glb',
    function(gltf){
      const headGroup = gltf.scene;
      scene.add(headGroup);
      console.log('Model loaded!');

      modelState.headGroup = headGroup;

      //Search for HeadBone and Mesh with Shape Keys
      gltf.scene.traverse((child) => {
        //Search for HeadBone
        if (child instanceof THREE.Bone && child.name === 'HeadBone') {
          child.rotation.order = 'YXZ';
          modelState.headBone = child;
        }
        //Search for Mesh with Shape Keys
        if ((child instanceof THREE.Mesh || child instanceof THREE.SkinnedMesh) && child.morphTargetDictionary){
          modelState.headMesh = child;
        }
        //Apply Shadows to Model
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // 0 skin -> 10 metal
          child.material.metalness = 0.2; 
          // 0 shiny -> 10 dull
          child.material.roughness = 0.4; 
          // increase reflectiveness
          child.material.envMapIntensity = 1.4;
          }
      });

      //Diagnosis & Size Function
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = box.getSize(new THREE.Vector3());
      console.log('Model size:', size);

      //Mouseclick Event -> Eyes blink
      if(startBlink){
        window.addEventListener('click', startBlink);
      }
    },

    undefined,
    function (error) {
      console.error('Failed to load model:', error);
    }
  );
}