document.addEventListener("DOMContentLoaded", function() {
    // Función para obtener los alumnos
    function obtenerAlumnos() {
      fetch('get_alumnos.php')
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            let html = '<table>';
            html += '<thead><tr><th>Nombre</th><th>Apellido</th><th>Grupo</th><th>Asistencias</th><th>Pago</th></tr></thead>';
            html += '<tbody>';
            
            data.forEach(alumno => {
              html += `<tr>
                        <td>${alumno.nombre}</td>
                        <td>${alumno.apellido}</td>
                        <td>${alumno.grupo}</td>
                        <td>${alumno.asistencias}</td>
                        <td>${alumno.pago === '1' ? 'Sí' : 'No'}</td>
                      </tr>`;
            });
            
            html += '</tbody></table>';
            document.getElementById('alumnos-container').innerHTML = html;
          } else {
            document.getElementById('alumnos-container').innerHTML = 'No hay alumnos registrados.';
          }
        })
        .catch(error => {
          console.error('Error al obtener los datos de los alumnos:', error);
        });
    }
  
    // Llamamos la función para obtener los alumnos cuando se carga la página
    obtenerAlumnos();
  });
  