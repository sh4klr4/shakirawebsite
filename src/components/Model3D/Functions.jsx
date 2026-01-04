import * as THREE from 'three';
import gsap from 'gsap';

export const setupFunctions = (scene, camera, renderer, modelState, controls, scrollRef) => {
    //Init Variables for Mouse Tracking
    const mouse = new THREE.Vector2();
    const targetVector = new THREE.Vector3();

    //Handle Mouse Movement
    const handleMouseMove = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    //------- Animate Head Model to follow Mouse ------- 
    const animate = () => {
        requestAnimationFrame(animate);
        const {headGroup, headBone} = modelState;

        if (headGroup && headBone) {
            targetVector.x = mouse.x * 0.8;
            targetVector.y = mouse.y * -0.3;

            const targetQuaternion = new THREE.Quaternion().setFromEuler(
                new THREE.Euler(targetVector.y, targetVector.x, 0, 'YXZ')
            );
            headBone.quaternion.slerp(targetQuaternion, 0.1);

            //if Scrollable
            let targetY = 0;
            if (scrollRef && scrollRef.current) {
                const scrollY = scrollRef.current.scrollTop;
                targetY = scrollY * 0.005;
            }
            headGroup.position.y = THREE.MathUtils.lerp(headGroup.position.y, targetY, 0.1);
        }
        //Update Orbit Controls
        if (controls) {
            controls.update();
        }

        renderer.render(scene, camera);
    };

    //------- Blink Method ------- 
    const startBlink = () => {
        const headMesh = modelState.headMesh;
        if (!headMesh || !headMesh.morphTargetDictionary) return;
        const blinkIndex = headMesh.morphTargetDictionary['EyelidsClosed'];

        gsap.to(headMesh.morphTargetInfluences, {
            [blinkIndex]: 1.0,
            duration: 0.1, ease: 'power2.out',
            onComplete: () => {
                gsap.to(headMesh.morphTargetInfluences, {
                    [blinkIndex]: 0.0,
                    duration: 0.15, delay: 0.1, ease: 'power2.in'
                });
            }
        });
    };

    return { animate, startBlink, handleMouseMove };
};