<?php
// Conexión a la base de datos
$conexion = new mysqli("sql209.infinityfree.com", "if0_38734736", "Pilar09122023", "if0_38734736_asistencias");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Obtenemos datos del formulario
$grupo = $_POST['grupo'];
$clase = $_POST['clase'];
$fecha = date("Y-m-d"); // Fecha de hoy
$presentes = isset($_POST['presentes']) ? $_POST['presentes'] : [];
$abonado = isset($_POST['abonado']) ? $_POST['abonado'] : [];

// Guardar asistencia por cada alumno marcado como presente
foreach ($presentes as $id_alumno) {
    $abono = isset($abonado[$id_alumno]) ? 1 : 0;

    $stmt = $conexion->prepare("INSERT INTO asistencias (id_alumno, grupo, clase, fecha, presente, abonado) VALUES (?, ?, ?, ?, 1, ?)");
    $stmt->bind_param("isssi", $id_alumno, $grupo, $clase, $fecha, $abono);
    $stmt->execute();
    $stmt->close();
}

$conexion->close();

echo "✅ Asistencia guardada correctamente.<br><a href='tomar_asistencia.php'>Volver</a>";
?>
