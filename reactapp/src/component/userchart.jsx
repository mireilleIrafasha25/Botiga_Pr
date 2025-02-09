// UserChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 20 },
  { month: 'Feb', users: 35 },
  { month: 'Mar', users: 50 },
  { month: 'Apr', users: 65 },
  { month: 'May', users: 80 },
  { month: 'Jun', users: 100 },
];

const UserChart = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h3>User Registration by Month</h3>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;
