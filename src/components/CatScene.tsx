import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

const MODEL_URL = "/catrave2.compressed.glb";

export default function CatScene() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        let frameId = 0;
        let disposed = false;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0a0510, 0.02);

        const camera = new THREE.PerspectiveCamera(
            55,
            mount.clientWidth / mount.clientHeight,
            0.1,
            100
        );
        // Repositioned once the model's real bounding box is known, after load.
        camera.position.set(4, 3, 6);
        camera.lookAt(0, 1, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        mount.appendChild(renderer.domElement);

        // Mood lighting — dark room, competing warm/cool club lights.
        // Physically-based light units: intensities are candela, so they need to be
        // large relative to legacy pre-r155 values to read as a bright "pop" at a
        // few meters. Positions are re-anchored to the model's real center on load.
        scene.add(new THREE.AmbientLight(0x1c1226, 2.5));

        const keyLight = new THREE.SpotLight(0xff2d6b, 38, 15, Math.PI / 4, 0.6, 1.5);
        scene.add(keyLight, keyLight.target);

        const fillLight = new THREE.PointLight(0x33e0ff, 22, 12, 2);
        scene.add(fillLight);

        const rimLight = new THREE.PointLight(0xff59d4, 16, 10, 2);
        scene.add(rimLight);

        // Room wash — anchored to the room's center/size rather than the
        // character, with low decay so the glow reaches the walls instead of
        // dying out a couple meters from the booth.
        const washPink = new THREE.PointLight(0xff2d6b, 12, 30, 1);
        scene.add(washPink);

        const washCyan = new THREE.PointLight(0x33e0ff, 10, 30, 1);
        scene.add(washCyan);

        // Bloom for the moody glow + emissive DJ buttons.
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(mount.clientWidth, mount.clientHeight),
            0.45,
            0.4,
            0.55
        );
        composer.addPass(bloomPass);
        composer.addPass(new OutputPass());

        let mixer: THREE.AnimationMixer | null = null;

        const loader = new GLTFLoader();
        loader.load(
            MODEL_URL,
            (gltf) => {
                if (disposed) return;

                scene.add(gltf.scene);

                const poster = gltf.scene.getObjectByName("poster");
                if (poster) {
                    poster.position.y -= 0.4;
                }

                const poster058 = gltf.scene.getObjectByName("poster058");
                if (poster058) {
                    poster058.position.y += 0.1
                    poster058.scale.multiplyScalar(2.7);
                }

                const roomBox = new THREE.Box3().setFromObject(gltf.scene);
                const roomSize = roomBox.getSize(new THREE.Vector3());
                const roomMaxDim = Math.max(roomSize.x, roomSize.y, roomSize.z);

                // Frame the character specifically, not the whole room — the room
                // bounding box is much bigger than the character and would put a
                // bbox-relative camera outside the room shell entirely. Find the
                // character's own bounds, then raycast from its center out toward
                // the room meshes so the camera never ends up past a wall.
                const catBox = new THREE.Box3();
                const headBox = new THREE.Box3();
                const roomMeshes: THREE.Object3D[] = [];
                let foundCat = false;
                let foundHead = false;
                gltf.scene.traverse((obj) => {
                    if ((obj as THREE.Mesh).isMesh) {
                        const lname = obj.name.toLowerCase();
                        if (lname.startsWith("cat")) {
                            catBox.expandByObject(obj);
                            foundCat = true;
                            if (lname.includes("head")) {
                                headBox.expandByObject(obj);
                                foundHead = true;
                            }
                        } else {
                            roomMeshes.push(obj);
                        }
                    }
                });
                const focus = foundCat
                    ? catBox.getCenter(new THREE.Vector3())
                    : roomBox.getCenter(new THREE.Vector3());
                // Aim at face height (the head mesh), not the character's overall
                // vertical center, which sits at chest/booth height.
                focus.y = foundHead ? headBox.getCenter(new THREE.Vector3()).y : focus.y;
                const catSize = foundCat ? catBox.getSize(new THREE.Vector3()) : roomSize;
                const catMaxDim = Math.max(catSize.x, catSize.y, catSize.z);

                // Only raycast against wall-scale geometry — small clutter (CDs,
                // buttons on the booth) sitting near the character would otherwise
                // register as a "wall" a few centimeters away and trap the camera.
                const clutterFloor = catMaxDim * 0.3;
                const wallMeshes = roomMeshes.filter((obj) => {
                    const size = new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3());
                    return Math.max(size.x, size.y, size.z) > clutterFloor;
                });

                const viewDir = new THREE.Vector3(-0.9, 0.2, -0.25).normalize();
                const raycaster = new THREE.Raycaster(focus, viewDir);
                const hits = wallMeshes.length ? raycaster.intersectObjects(wallMeshes, false) : [];
                // A real hit means a wall is genuinely nearby — stay safely inside it.
                // No hit means that direction is open, so use a generous distance
                // instead of a stingy default; the room/character caps still apply.
                const wallDist = hits.length > 0 ? hits[0].distance * 0.85 : roomMaxDim * 0.7;
                const camDist = Math.min(wallDist, catMaxDim * 2.5, roomMaxDim * 0.6);

                camera.position.copy(focus).addScaledVector(viewDir, camDist);
                camera.lookAt(focus);
                camera.near = Math.max(0.03, roomMaxDim / 300);
                camera.far = roomMaxDim * 10;
                camera.updateProjectionMatrix();

                keyLight.position.set(focus.x + catMaxDim * 0.9, focus.y + catMaxDim * 1.1, focus.z + catMaxDim * 0.6);
                keyLight.target.position.copy(focus);
                fillLight.position.set(focus.x - catMaxDim * 1.2, focus.y + catMaxDim * 0.6, focus.z - catMaxDim * 0.4);
                rimLight.position.set(focus.x - catMaxDim * 0.2, focus.y + catMaxDim * 1.2, focus.z - catMaxDim * 1.0);

                const roomCenter = roomBox.getCenter(new THREE.Vector3());
                washPink.position.set(
                    roomBox.min.x + roomSize.x * 0.15,
                    roomCenter.y + roomSize.y * 0.25,
                    roomBox.max.z - roomSize.z * 0.15
                );
                washCyan.position.set(
                    roomBox.max.x - roomSize.x * 0.15,
                    roomCenter.y + roomSize.y * 0.15,
                    roomBox.min.z + roomSize.z * 0.15
                );

                gltf.scene.traverse((obj) => {
                    if ((obj as THREE.Mesh).isMesh) {
                        const mesh = obj as THREE.Mesh;
                        const materials = Array.isArray(mesh.material)
                            ? mesh.material
                            : [mesh.material];
                        materials.forEach((mat) => {
                            const m = mat as THREE.MeshStandardMaterial;
                            if (m.emissive) {
                                console.log(
                                    `[CatScene] ${mesh.name} / ${m.name}: emissive=#${m.emissive.getHexString()} intensity=${m.emissiveIntensity}`
                                );
                            }
                        });
                    }
                });

                if (gltf.animations.length > 0) {
                    mixer = new THREE.AnimationMixer(gltf.scene);
                    gltf.animations.forEach((clip) => {
                        const action = mixer!.clipAction(clip);
                        action.setLoop(THREE.LoopRepeat, Infinity);
                        action.play();
                    });
                }
            },
            undefined,
            (err) => {
                console.error("[CatScene] failed to load model", err);
            }
        );

        const clock = new THREE.Clock();

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            if (document.hidden) return;
            const delta = clock.getDelta();
            mixer?.update(delta);
            composer.render();
        };
        animate();

        const handleResize = () => {
            const width = mount.clientWidth;
            const height = mount.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            composer.setSize(width, height);
            bloomPass.setSize(width, height);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            disposed = true;
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
            mixer?.stopAllAction();
            scene.traverse((obj) => {
                if ((obj as THREE.Mesh).isMesh) {
                    const mesh = obj as THREE.Mesh;
                    mesh.geometry.dispose();
                    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                    materials.forEach((mat) => mat.dispose());
                }
            });
            composer.dispose();
            renderer.dispose();
            if (renderer.domElement.parentNode === mount) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
