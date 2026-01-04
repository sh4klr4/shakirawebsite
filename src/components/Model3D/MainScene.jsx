import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { setupLights } from './Lights';
import { setupEnvironment } from './Environment';
import { loadModel } from './Loader';
import { setupFunctions } from './Functions';

const MainScene = () => {
  //REF for HTML
  const mountRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    //------- Set up Three Scene, Camera, Renderer -------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.set(0, -0.5, 5.7);
    const renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    //------- Put in DOM -------
    const currentMount = mountRef.current;
    currentMount.appendChild(renderer.domElement);

    //------- Set up Lights from Lights.jsx -------
    setupLights(scene, renderer);
    setupEnvironment(scene);

    //------- Set up Controls -------
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.enableZoom = false;   
    controls.enablePan = false;

    //------- Shared State: Variable of 3D Model -------
    const modelState = {
      headGroup: null,
      headBone: null,
      headMesh: null
    };

    //------- Get Functions -------
    const { animate, startBlink, handleMouseMove } = setupFunctions(
        scene, camera, renderer, modelState, controls, scrollRef
    );

    //------- Load 3D Head Model -------
    const loader = new GLTFLoader();
    loadModel(
      scene, 
      loader,
      modelState,
      startBlink
    );

    //------- Mouse Event Listener -------
    window.addEventListener('mousemove', handleMouseMove);

    animate();

    //------- CleanUp -------
    return () => {
      window.removeEventListener('click', startBlink);
      window.removeEventListener('mousemove', handleMouseMove);
      controls.dispose();
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };

  }, []);
  
  return (
    <div 
      ref={scrollRef} 
    >
      <div 
        ref={mountRef} 
      />
    </div>
  );
};

export default MainScene;