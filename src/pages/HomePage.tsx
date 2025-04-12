import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Welcome to Class Attendance</h2>
      <nav>
        <ul>
          <li><Link to="/attendance">Take Attendance</Link></li>
          <li><Link to="/students">Manage Students</Link></li>
          <li><Link to="/reports">Generate Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;