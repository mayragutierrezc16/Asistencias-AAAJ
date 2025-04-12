<?php
// Conexión a la base de datos
$conexion = new mysqli("sql209.infinityfree.com", "if0_38734736", "Pilar09122023", "if0_38734736_asistencias");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Definir el mes y año actuales
$mes_actual = date("m");
$anio_actual = date("Y");

// Consultamos la asistencia del mes actual
$sql = "SELECT a.id_alumno, a.grupo, a.clase, a.fecha, a.presente, a.abonado, 
               CONCAT(alumno.nombre, ' ', alumno.apellido) AS alumno_nombre 
        FROM asistencias a
        JOIN alumnos alumno ON a.id_alumno = alumno.id
        WHERE MONTH(a.fecha) = ? AND YEAR(a.fecha) = ?
        ORDER BY a.fecha";

$stmt = $conexion->prepare($sql);
$stmt->bind_param("ii", $mes_actual, $anio_actual);
$stmt->execute();
$resultado = $stmt->get_result();

// Creamos el archivo Excel
header("Content-Type: application/vnd.ms-excel");
header("Content-Disposition: attachment; filename=asistencias_" . date("F_Y") . ".xls");

// Imprimimos la cabecera
echo "Alumno\tClase\tFecha\tAsistencia\tPago\n";

// Imprimimos los datos de cada fila
while ($fila = $resultado->fetch_assoc()) {
    $asistencia = $fila['presente'] ? 'Sí' : 'No';
    $pago = $fila['abonado'] ? 'Sí' : 'No';
    echo "{$fila['alumno_nombre']}\t{$fila['clase']}\t{$fila['fecha']}\t{$asistencia}\t{$pago}\n";
}

$stmt->close();
$conexion->close();
?>
