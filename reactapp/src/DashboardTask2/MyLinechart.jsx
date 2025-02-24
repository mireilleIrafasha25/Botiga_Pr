import React from "react";
import { LineChart, Line, XAxis, YAxis, Area,Tooltip,  ResponsiveContainer,CartesianGrid} from "recharts";
import "./Dashstyles/mylinechart.css"
const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 40 },
  { name: "Apr", value: 70 },
  { name: "May", value: 50 },
  { name: "Jun", value: 85 },
  { name: "Jul", value: 45 },
  { name: "Aug", value: 60 },
  { name: "Sep", value: 50 },
  { name: "Oct", value: 65 },
  { name: "Nov", value: 55 },
  { name: "Dec", value: 70 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p>{label}</p>
        <p>🔵 series-1: <strong>{payload[0].value}</strong></p>
      </div>
    );
  }
  return null;
};

const MyLineChart = () => {
    return (
    //   <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="transparent"
              fill="#99ccff"       
              fillOpacity={0.3} 
            />
            <Line type="monotone" dataKey="value" stroke="#0066ff" strokeWidth={1} dot={{ r: 0 }} />
          </LineChart>
        </ResponsiveContainer>
        
    //   </div>
    );
  };
  

export default MyLineChart;
