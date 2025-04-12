import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AttendancePage from './pages/AttendancePage';
import StudentsPage from './pages/StudentsPage';
import ReportsPage from './pages/ReportsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/attendance" component={AttendancePage} />
        <Route path="/students" component={StudentsPage} />
        <Route path="/reports" component={ReportsPage} />
      </Switch>
    </Router>
  );
};

export default App;