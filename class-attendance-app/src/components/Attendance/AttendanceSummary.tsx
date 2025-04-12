import React from 'react';

const AttendanceSummary: React.FC<{ attendanceData: any }> = ({ attendanceData }) => {
    const totalClasses = attendanceData.length;
    const totalAttendance = attendanceData.reduce((acc, curr) => acc + curr.attended, 0);
    const attendancePercentage = totalClasses ? (totalAttendance / totalClasses) * 100 : 0;

    return (
        <div className="attendance-summary">
            <h2>Attendance Summary</h2>
            <p>Total Classes: {totalClasses}</p>
            <p>Total Attendance: {totalAttendance}</p>
            <p>Attendance Percentage: {attendancePercentage.toFixed(2)}%</p>
        </div>
    );
};

export default AttendanceSummary;