import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Class Attendance App</h1>
            <p>This application allows you to manage class attendance, track student payments, and generate reports.</p>
            <div className="features">
                <h2>Features</h2>
                <ul>
                    <li>Manage student groups: C, B, A y WS</li>
                    <li>Track attendance for classes: Especiales, Off Skate, and Generales</li>
                    <li>Add and manage students</li>
                    <li>Download attendance reports in Excel format</li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;