import React, { useEffect, useState } from 'react';
import { fetchAttendanceRecords } from '../../services/api';

const AttendanceList = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    useEffect(() => {
        const getAttendanceRecords = async () => {
            const records = await fetchAttendanceRecords();
            setAttendanceRecords(records);
        };

        getAttendanceRecords();
    }, []);

    return (
        <div className="attendance-list">
            <h2>Attendance Records</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Class Type</th>
                        <th>Group</th>
                        <th>Students Present</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((record) => (
                        <tr key={record.id}>
                            <td>{record.date}</td>
                            <td>{record.classType}</td>
                            <td>{record.group}</td>
                            <td>{record.studentsPresent.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceList;