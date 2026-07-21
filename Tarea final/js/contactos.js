const form = document.getElementById('formContacto');
  const notificacion = document.getElementById('notificacion');
  const notificacionError = document.getElementById('notificacionError');
  const telefono = document.getElementById('telefono');

  // Solo permitir números en el teléfono
  telefono.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar que tenga 9 dígitos
    if(telefono.value.length !== 9) {
      mostrarError();
      return;
    }
    
    // Si pasa validación: mostrar éxito
    mostrarExito();
    form.reset();
  });

  function mostrarExito() {
    notificacion.classList.add('mostrar');
    setTimeout(() => {
      notificacion.classList.remove('mostrar');
    }, 3000);
  }

  function mostrarError() {
    notificacionError.classList.add('mostrar');
    setTimeout(() => {
      notificacionError.classList.remove('mostrar');
    }, 3000);
  }

