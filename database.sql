-- Crear base de datos
CREATE DATABASE IF NOT EXISTS asistencias;

-- Usar la base de datos
USE asistencias;

-- Crear tabla de alumnos
CREATE TABLE IF NOT EXISTS alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100)
);

-- Crear tabla de asistencias
CREATE TABLE IF NOT EXISTS asistencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_alumno INT NOT NULL,
    grupo VARCHAR(50),
    clase VARCHAR(50),
    fecha DATE,
    presente BOOLEAN,
    abonado BOOLEAN,
    FOREIGN KEY (id_alumno) REFERENCES alumnos(id)
);

-- Insertar algunos datos de prueba
INSERT INTO alumnos (nombre, apellido) VALUES ('Juan', 'Pérez');
INSERT INTO alumnos (nombre, apellido) VALUES ('Ana', 'Gómez');
INSERT INTO asistencias (id_alumno, grupo, clase, fecha, presente, abonado) VALUES (1, 'A', 'General', '2025-04-12', TRUE, TRUE);
INSERT INTO asistencias (id_alumno, grupo, clase, fecha, presente, abonado) VALUES (2, 'B', 'Especial', '2025-04-12', FALSE, TRUE);
