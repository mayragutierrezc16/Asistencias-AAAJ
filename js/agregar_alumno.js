// Obtener el formulario y sus elementos
const form = document.getElementById('agregar-alumno-form');

// Función para manejar el envío del formulario
form.addEventListener('submit', function (event) {
  event.preventDefault();  // Prevenir el comportamiento por defecto de envío del formulario

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const grupo = document.getElementById('grupo').value;

  // Enviar los datos al servidor usando AJAX (usando Fetch API)
  fetch('agregar_alumno.php', {
    method: 'POST',
    body: JSON.stringify({ nombre, apellido, grupo }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Alumno agregado correctamente');
      form.reset();
    } else {
      alert('Hubo un error al agregar el alumno');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Hubo un error al enviar los datos');
  });
});
