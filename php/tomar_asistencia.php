<form method="POST" action="tomar_asistencia.php">
  <label for="grupo">Grupo:</label>
  <select name="grupo" id="grupo" required>
    <option value="">Seleccionar grupo</option>
    <option value="C">C</option>
    <option value="B">B</option>
    <option value="A y WS">A y WS</option>
  </select>

  <label for="clase">Clase:</label>
  <select name="clase" id="clase" required>
    <option value="">Seleccionar clase</option>
    <option value="General">General</option>
    <option value="Especial">Especial</option>
    <option value="Off Skate">Off Skate</option>
  </select>

  <button type="submit" name="seleccionar_grupo">Mostrar alumnos</button>
</form>
<?php
if (isset($_POST['seleccionar_grupo'])) {
    $grupoSeleccionado = $_POST['grupo'];
    $claseSeleccionada = $_POST['clase'];

    // Conexión a la base de datos
    $conexion = new mysqli("sql209.infinityfree.com", "if0_38734736", "Pilar09122023", "if0_38734736_asistencias");

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    // Buscar alumnos del grupo
    $stmt = $conexion->prepare("SELECT id, nombre FROM alumnos WHERE grupo = ?");
    $stmt->bind_param("s", $grupoSeleccionado);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        echo "<form method='POST' action='guardar_asistencia.php'>";
        echo "<input type='hidden' name='grupo' value='$grupoSeleccionado'>";
        echo "<input type='hidden' name='clase' value='$claseSeleccionada'>";

        while ($alumno = $resultado->fetch_assoc()) {
            $id = $alumno['id'];
            $nombre = $alumno['nombre'];

            echo "<div>";
            echo "<label>";
            echo "<input type='checkbox' name='presentes[]' value='$id'> $nombre";
            echo "</label>";

            echo "<label> | Abonó: ";
            echo "<input type='checkbox' name='abonado[$id]' value='1'>";
            echo "</label>";
            echo "</div>";
        }

        echo "<button type='submit' name='guardar_asistencia'>Guardar asistencia</button>";
        echo "</form>";
    } else {
        echo "No hay alumnos cargados en este grupo.";
    }

    $stmt->close();
    $conexion->close();
}
?>
