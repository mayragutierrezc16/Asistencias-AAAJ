import React from 'react';
import DownloadReport from '../components/Reports/DownloadReport';
import ReportFilters from '../components/Reports/ReportFilters';

const ReportsPage: React.FC = () => {
    return (
        <div className="reports-page">
            <h1>Attendance Reports</h1>
            <ReportFilters />
            <DownloadReport />
        </div>
    );
};

export default ReportsPage;