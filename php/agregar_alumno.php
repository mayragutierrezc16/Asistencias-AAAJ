<?php
// Conexión a la base de datos
$servername = "sql209.infinityfree.com";
$username = "if0_38734736";
$password = "Pilar09122023";
$dbname = "if0_38734736_asistencias";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Obtener los datos enviados por POST
$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data['nombre'];
$apellido = $data['apellido'];
$grupo = $data['grupo'];

// Insertar los datos en la base de datos
$sql = "INSERT INTO alumnos (nombre, apellido, grupo) VALUES ('$nombre', '$apellido', '$grupo')";

if ($conn->query($sql) === TRUE) {
  // Respuesta exitosa
  echo json_encode(['success' => true]);
} else {
  // Respuesta en caso de error
  echo json_encode(['success' => false, 'message' => 'Error al insertar alumno: ' . $conn->error]);
}

$conn->close();
?>
