let scene, camera, renderer;
let car;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  camera = new THREE.PerspectiveCamera(
    0.4,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.set(100, 1, 82);
  camera.lookAt(new THREE.Vector3(0, 0.15, 0));

  hlight = new THREE.AmbientLight(0x404040, 10);
  scene.add(hlight);

  directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  light = new THREE.PointLight(0xc4c4c4, 1);
  light.position.set(0, 300, 500);
  scene.add(light);
  light2 = new THREE.PointLight(0xc4c4c4, 1);
  light2.position.set(500, 100, 0);
  scene.add(light2);
  light3 = new THREE.PointLight(0xc4c4c4, 1);
  light3.position.set(0, 100, -500);
  scene.add(light3);
  light4 = new THREE.PointLight(0xc4c4c4, 1);
  light4.position.set(-500, 300, 500);
  scene.add(light4);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  let loader = new THREE.GLTFLoader();
  loader.load('scene.gltf', function (gltf) {
    car = gltf.scene.children[0];
    car.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);

    animate();
  });
}

function animate() {
  // Rotating the car continuously
  if (car) {
    car.rotation.z += 0.005;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();