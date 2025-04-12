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

// Mostramos los resultados en una tabla
echo "<h1>Resumen de Asistencias y Pagos - " . date("F Y") . "</h1>";
echo "<table border='1' style='width:100%; border-collapse: collapse;'>";
echo "<tr>
        <th>Alumno</th>
        <th>Clase</th>
        <th>Fecha</th>
        <th>Asistencia</th>
        <th>Pago</th>
      </tr>";

while ($fila = $resultado->fetch_assoc()) {
    $asistencia = $fila['presente'] ? 'Sí' : 'No';
    $pago = $fila['abonado'] ? 'Sí' : 'No';

    echo "<tr>
            <td>{$fila['alumno_nombre']}</td>
            <td>{$fila['clase']}</td>
            <td>{$fila['fecha']}</td>
            <td>{$asistencia}</td>
            <td>{$pago}</td>
          </tr>";
}

echo "</table>";

// Generar Excel
echo "<a href='descargar_excel.php' class='btn'>Descargar Excel</a>";

$stmt->close();
$conexion->close();
?>
