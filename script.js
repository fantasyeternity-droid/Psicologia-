
// Menú responsive toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth scroll para todos los enlaces internos
document.querySelectorAll('.nav-links a, a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Cerrar menú móvil si está abierto
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    }
  });
});

// Efecto de aparición con Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplicar animación a tarjetas
document.querySelectorAll('.card-glass, .resource-card, .tool-card, .help-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Efecto de brillo en navbar al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    navbar.style.backdropFilter = 'blur(15px)';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    navbar.style.backdropFilter = 'blur(12px)';
  }
});

// Efecto de gradiente dinámico que sigue al mouse
document.body.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #0a0a0a 0%, #000000 100%)`;
});

// Efecto hover en botones y enlaces
const allLinks = document.querySelectorAll('.btn-glow, .btn-outline, .resource-card a, .tool-card a');
allLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    if (link.classList.contains('btn-outline')) {
      link.style.textShadow = '0 0 5px #00c4b4';
    }
  });
  link.addEventListener('mouseleave', () => {
    link.style.textShadow = 'none';
  });
});

// Cerrar menú al hacer clic fuera en móvil
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    if (menuToggle && !menuToggle.contains(e.target) && navLinks && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  }
});

// Mensaje en consola
console.log('%c💜💚 Cascaron Digital | Conectad@s contra el Silencio Digital | Prevención ciberacoso y salud mental', 'color: #9b5de5; font-size: 14px; font-weight: bold;');

// Pequeña animación de bienvenida
window.addEventListener('load', () => {
  console.log('✅ Página cargada completamente');
});
