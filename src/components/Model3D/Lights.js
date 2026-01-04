// Lights.js
import * as THREE from 'three';

// Wir exportieren eine Funktion, die "scene" und "renderer" entgegennimmt
export const setupLights = (scene, renderer) => {

    // Schatten-Mapping aktivieren
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Macht die Schatten weicher

    // 1. Ambient Light (niedriger): Reduziert Kontrastverlust
    scene.add(new THREE.AmbientLight(0xffffff, 0.3)); // Noch niedriger für mehr Kontrast

    // 2. Directional Light (Kontrastquelle)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Intensität

    directionalLight.position.set(5, 7, 15);

    // Lichtquelle muss Schatten werfen
    directionalLight.castShadow = true;

    // Schattenauflösung (höher = schärfer, aber langsamer)
    directionalLight.shadow.mapSize.width = 1400;
    directionalLight.shadow.mapSize.height = 1400;

    directionalLight.shadow.bias = 0.000009;

    // Schatten-Kamera anpassen (wichtig, damit Schatten nicht abgeschnitten werden)
    const d = 4;
    directionalLight.shadow.camera.left = -d;
    directionalLight.shadow.camera.right = d;
    directionalLight.shadow.camera.top = d;
    directionalLight.shadow.camera.bottom = -d;

    scene.add(directionalLight);
    
};