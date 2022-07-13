import './Chart.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { useState, useEffect } from 'react';

const Chart = ({data}) => {
    const [lineData, setLineData] = useState(data);
    useEffect(() => {
        setLineData(data);
      }, [data]);
       return (
        <LineChart width={600} height={300} data={lineData} className="daily_report_chart">
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    )
}

export default Chart
