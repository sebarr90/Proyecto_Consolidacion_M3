// Agrega un evento de click a cada uno de los elementos con los id avatar1, avatar2, avatar3, avatar4, avatar5
document.getElementById('avatar1').addEventListener('click', function() {
    agrandarImagen(this);
  });
  document.getElementById('avatar2').addEventListener('click', function() {
    agrandarImagen(this);
  });
  document.getElementById('avatar3').addEventListener('click', function() {
    agrandarImagen(this);
  });
  document.getElementById('avatar4').addEventListener('click', function() {
    agrandarImagen(this);
  });
  document.getElementById('avatar5').addEventListener('click', function() {
    agrandarImagen(this);
  });
  
  // Función para agrandar la imagen
  function agrandarImagen(imagen) {
    imagen.style.width = '50vh'; // Establece el ancho y alto con el mismo valor
    imagen.style.height = '50vh';
    imagen.style.position = 'fixed'; // Cambia a fixed para que se centre en la pantalla
    imagen.style.top = '50%';
    imagen.style.left = '50%';
    imagen.style.transform = 'translate(-50%, -50%)';
    imagen.style.zIndex = '1000'; // Añade un z-index para que la imagen se muestre encima de otros elementos
    imagen.style.margin = '0 auto'; // Añade un margen para que se centre horizontalmente
    imagen.classList.add('agrandado');
  
    // Agrega un evento de click al documento para restaurar la imagen cuando se hace click fuera de ella
    document.addEventListener('click', function(e) {
      if (e.target !== imagen) {
        restaurarImagen(imagen);
        document.removeEventListener('click', arguments.callee);
      }
    });
  }
  
  // Función para restaurar la imagen
  function restaurarImagen(imagen) {
    imagen.style.width = '';
    imagen.style.height = '';
    imagen.style.position = '';
    imagen.style.top = '';
    imagen.style.left = '';
    imagen.style.transform = '';
    imagen.style.zIndex = ''; // Restaura el z-index original
    imagen.style.margin = ''; // Restaura el margen original
    imagen.classList.remove('agrandado');
  }