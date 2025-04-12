<?php
// Conexión a la base de datos
$servername = "sql209.infinityfree.com";
$username = "if0_38734736";
$password = "Pilar09122023";
$dbname = "if0_38734736_asistencias";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consultar los datos de los alumnos
$sql = "SELECT nombre, apellido, grupo, asistencias, pago FROM alumnos";
$result = $conn->query($sql);

$alumnos = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $alumnos[] = $row;
    }
}

// Devolver los datos en formato JSON
echo json_encode($alumnos);

// Cerrar la conexión
$conn->close();
?>
