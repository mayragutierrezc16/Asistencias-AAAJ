import React, { useState } from 'react';

const ReportFilters: React.FC<{ onFilterChange: (filters: { startDate: string; endDate: string; group: string }) => void }> = ({ onFilterChange }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [group, setGroup] = useState('C');

    const handleFilterChange = () => {
        onFilterChange({ startDate, endDate, group });
    };

    return (
        <div className="report-filters">
            <h2>Filter Reports</h2>
            <div>
                <label htmlFor="start-date">Start Date:</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="end-date">End Date:</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="group">Student Group:</label>
                <select
                    id="group"
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                >
                    <option value="C">C</option>
                    <option value="B">B</option>
                    <option value="A y WS">A y WS</option>
                </select>
            </div>
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export default ReportFilters;