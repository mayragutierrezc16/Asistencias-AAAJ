CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    group_type VARCHAR(10) CHECK (group_type IN ('C', 'B', 'A y WS')),
    payment_status BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE classes (
    id SERIAL PRIMARY KEY,
    class_type VARCHAR(20) CHECK (class_type IN ('Especiales', 'Off Skate', 'Generales')),
    date DATE NOT NULL
);

CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    class_id INT REFERENCES classes(id) ON DELETE CASCADE,
    attended BOOLEAN NOT NULL DEFAULT FALSE,
    UNIQUE(student_id, class_id)
);