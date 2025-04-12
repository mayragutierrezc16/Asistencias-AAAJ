import { Pool } from 'pg';

const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'class_attendance',
    password: 'your_password',
    port: 5432,
});

export const getStudents = async () => {
    const res = await pool.query('SELECT * FROM students');
    return res.rows;
};

export const addStudent = async (student) => {
    const { name, group, paymentStatus } = student;
    const res = await pool.query(
        'INSERT INTO students (name, group, payment_status) VALUES ($1, $2, $3) RETURNING *',
        [name, group, paymentStatus]
    );
    return res.rows[0];
};

export const markAttendance = async (attendance) => {
    const { studentId, classType, date } = attendance;
    const res = await pool.query(
        'INSERT INTO attendance (student_id, class_type, date) VALUES ($1, $2, $3) RETURNING *',
        [studentId, classType, date]
    );
    return res.rows[0];
};

export const getAttendance = async (classType, startDate, endDate) => {
    const res = await pool.query(
        'SELECT * FROM attendance WHERE class_type = $1 AND date BETWEEN $2 AND $3',
        [classType, startDate, endDate]
    );
    return res.rows;
};

export const getAttendanceSummary = async () => {
    const res = await pool.query(
        'SELECT class_type, COUNT(*) as total_attendance FROM attendance GROUP BY class_type'
    );
    return res.rows;
};

export const getStudentAttendance = async (studentId) => {
    const res = await pool.query(
        'SELECT * FROM attendance WHERE student_id = $1',
        [studentId]
    );
    return res.rows;
};