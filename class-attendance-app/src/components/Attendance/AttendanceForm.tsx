import React, { useState } from 'react';

const AttendanceForm = ({ students, classType, onSubmit }) => {
    const [attendance, setAttendance] = useState({});

    const handleChange = (studentId) => {
        setAttendance({
            ...attendance,
            [studentId]: !attendance[studentId],
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(attendance);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Mark Attendance for {classType}</h2>
            {students.map((student) => (
                <div key={student.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={attendance[student.id] || false}
                            onChange={() => handleChange(student.id)}
                        />
                        {student.name}
                    </label>
                </div>
            ))}
            <button type="submit">Submit Attendance</button>
        </form>
    );
};

export default AttendanceForm;