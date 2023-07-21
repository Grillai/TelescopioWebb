const particleCount = 20; // Numero di particelle
const container = document.body;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  container.appendChild(particle);
}

const particles = document.querySelectorAll('.particle');

function updateParticles() {
  particles.forEach(particle => {
    const size = Math.random() * 2;
    const speedX = Math.random() * 2 - 1.5;
    const speedY = Math.random() * 2 - 1.5;

    let x = parseFloat(particle.style.left) || Math.random() * window.innerWidth;
    let y = parseFloat(particle.style.top) || Math.random() * window.innerHeight;

    x += speedX;
    y += speedY;

    if (x > window.innerWidth || x < 0 || y > window.innerHeight || y < 0) {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
    }

    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
  });

  requestAnimationFrame(updateParticles);
}

updateParticles();


