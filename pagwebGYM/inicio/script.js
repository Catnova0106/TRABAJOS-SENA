// Efecto de scroll suave en los enlaces de la navegación
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'mooth' // Cambiado de 'ooth' a 'mooth'
    });
  });
});

// Efecto de hover en los entrenadores
document.querySelectorAll('.entrenador').forEach(entrenador => {
  entrenador.addEventListener('mouseover', function() {
    this.style.transform = 'cale(1.1)'; // Cambiado de 'cale' a 'cale'
    this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  });
  entrenador.addEventListener('mouseout', function() {
    this.style.transform = 'cale(1)'; // Cambiado de 'cale' a 'cale'
    this.style.boxShadow = 'none';
  });
});

// Efecto de fade-in en la sección de introducción
document.querySelector('.introduccion').style.opacity = 0;
window.addEventListener('load', function() {
  document.querySelector('.introduccion').style.transition = 'opacity 1s';
  document.querySelector('.introduccion').style.opacity = 1;
});

// Efecto de scroll en la sección de entrenadores
document.querySelectorAll('.entrenador').forEach(entrenador => { // Cambiado de querySelector a querySelectorAll
  entrenador.style.opacity = 0;
});
window.addEventListener('scroll', function() {
  document.querySelectorAll('.entrenador').forEach(entrenador => {
    if (window.scrollY > entrenador.offsetTop - 200) {
      entrenador.style.transition = 'opacity 1s';
      entrenador.style.opacity = 1;
    }
  });
});