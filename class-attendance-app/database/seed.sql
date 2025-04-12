INSERT INTO students (name, group, payment_status) VALUES 
('John Doe', 'C', 'Paid'),
('Jane Smith', 'B', 'Unpaid'),
('Alice Johnson', 'A y WS', 'Paid'),
('Bob Brown', 'C', 'Paid'),
('Charlie Davis', 'B', 'Unpaid');

INSERT INTO classes (class_type, date) VALUES 
('Especiales', '2023-10-01'),
('Off Skate', '2023-10-02'),
('Generales', '2023-10-03');

INSERT INTO attendance (student_id, class_id, attended) VALUES 
(1, 1, TRUE),
(2, 1, FALSE),
(3, 2, TRUE),
(4, 2, TRUE),
(5, 3, FALSE);