import React from 'react'
import "./chartDay.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ChartDay() {
        
const data = [
    {
      name: '24/3',
      "Active User": 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '25/3',
      "Active User" : 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '26/3',
      "Active User": 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '27/3',
      "Active User": 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      "Active User": 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      "Active User": 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      "Active User": 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      "Active User": 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'September',
      "Active User": 490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'October',
      "Active User": 1390,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'November',
      "Active User": 3230,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'December',
      "Active User": 2490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className='chart'>
        <h3 className="chartTitle">Dữ liệu tiêm theo ngày</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"></XAxis>
            {/* <Legend /> */}
                <Line type="monotone" dataKey="Active User" stroke="#5550bd"></Line>
            <YAxis></YAxis>
            <Tooltip/>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
       
  )
}
