import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Revenue: 4000 },
  { name: 'Feb', Revenue: 3000 },
  { name: 'Mar', Revenue: 2000 },
  { name: 'Apr', Revenue: 2780 },
  { name: 'May', Revenue: 1890 },
  { name: 'Jun', Revenue: 2390 },
  { name: 'Jul', Revenue: 3490 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
