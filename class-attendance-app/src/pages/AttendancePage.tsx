import React, { useState, useEffect } from 'react';
import AttendanceForm from '../components/Attendance/AttendanceForm';
import AttendanceList from '../components/Attendance/AttendanceList';
import AttendanceSummary from '../components/Attendance/AttendanceSummary';
import { fetchAttendanceData } from '../services/api';

const AttendancePage = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAttendanceData = async () => {
            const data = await fetchAttendanceData();
            setAttendanceData(data);
            setLoading(false);
        };
        loadAttendanceData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="attendance-page">
            <h1>Class Attendance</h1>
            <AttendanceForm setAttendanceData={setAttendanceData} />
            <AttendanceSummary attendanceData={attendanceData} />
            <AttendanceList attendanceData={attendanceData} />
        </div>
    );
};

export default AttendancePage;