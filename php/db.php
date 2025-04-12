<?php
$host = "sql209.infinityfree.com";
$usuario = "if0_38734736";
$clave = "Pilar09122023"; // Tu contraseña
$bd = "if0_38734736_asistencias"; // Nombre confirmado de tu base de datos

$conn = new mysqli($host, $usuario, $clave, $bd);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
