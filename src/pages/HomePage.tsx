import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ color: '#ff0000' }}>Bienvenido a Asistencias AAAJ</h1>
      <p>Gestiona las asistencias de clases de manera fácil y rápida.</p>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '1rem 0' }}>
            <Link to="/attendance" style={linkStyle}>
              Tomar Asistencias
            </Link>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <Link to="/students" style={linkStyle}>
              Gestionar Alumnos
            </Link>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <Link to="/reports" style={linkStyle}>
              Generar Reportes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const linkStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  backgroundColor: '#ff0000',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
};

export default HomePage;