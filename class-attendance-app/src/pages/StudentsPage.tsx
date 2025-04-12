import React, { useState, useEffect } from 'react';
import AddStudentForm from '../components/Students/AddStudentForm';
import StudentList from '../components/Students/StudentList';
import { fetchStudents } from '../services/api';

const StudentsPage = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const loadStudents = async () => {
            const studentData = await fetchStudents();
            setStudents(studentData);
        };
        loadStudents();
    }, []);

    return (
        <div className="students-page">
            <h1>Student Management</h1>
            <AddStudentForm onAddStudent={(newStudent) => setStudents([...students, newStudent])} />
            <StudentList students={students} />
        </div>
    );
};

export default StudentsPage;