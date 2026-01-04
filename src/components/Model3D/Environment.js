import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

export const setupEnvironment = (scene) => {
    //------- Load Environment -------
    new RGBELoader()
        .setPath( '/textures/' ) 
        .load( 'studio_small_09_2k.hdr', function ( texture ) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
            console.log("Environment Map geladen!");
        });
};  