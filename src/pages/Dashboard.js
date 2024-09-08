// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const [trucks, setTrucks] = useState([
    { id: 'T001', driverName: 'John Doe', otherInfo: 'Some info' },
    { id: 'T002', driverName: 'Jane Smith', otherInfo: 'Some info' },
    // Add more trucks as needed
  ]);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button className="add-truck-button">
        <Link to="/add-truck">Add Truck</Link>
      </button>
      <table className="trucks-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Driver Name</th>
            <th>Other Info</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck) => (
            <tr key={truck.id}>
              <td>{truck.id}</td>
              <td>{truck.driverName}</td>
              <td>{truck.otherInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
