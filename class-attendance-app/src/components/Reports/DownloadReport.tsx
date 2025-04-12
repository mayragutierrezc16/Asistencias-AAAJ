import React from 'react';
import { exportToExcel } from '../../utils/excelExport';
import { useAttendanceData } from '../../services/api';

const DownloadReport: React.FC = () => {
    const { attendanceData, loading, error } = useAttendanceData();

    const handleDownload = () => {
        if (attendanceData) {
            exportToExcel(attendanceData);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading attendance data.</div>;

    return (
        <div>
            <h2>Download Attendance Report</h2>
            <button onClick={handleDownload}>Download Excel</button>
        </div>
    );
};

export default DownloadReport;