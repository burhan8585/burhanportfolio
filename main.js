
// Three.js Setup
const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.005,
  color: 0xffffff,
});

const particlesMesh = new THREE.Points(
  particlesGeometry,
  particlesMaterial
);
scene.add(particlesMesh);

// Animation
function animate() {
  requestAnimationFrame(animate);
  particlesMesh.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();

// Handle resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Parallax effect
document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  particlesMesh.rotation.x = y * 0.0001;
  particlesMesh.rotation.y = x * 0.0001;
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
});

gsap.from(".hero .subtitle", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
});

gsap.from(".hero .contact-info", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.6,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
});

gsap.from(".skill-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%",
  },
});

gsap.from(".project-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
  },
});

gsap.from(".timeline-item", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 80%",
  },
});


