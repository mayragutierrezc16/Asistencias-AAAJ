import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../../services/api';

const StudentList: React.FC = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStudents = async () => {
            const data = await fetchStudents();
            setStudents(data);
            setLoading(false);
        };

        getStudents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.group}</td>
                            <td>{student.paid ? 'Paid' : 'Unpaid'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;