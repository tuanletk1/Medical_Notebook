import React from 'react'
import "./chartDay.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ChartDay() {
        
const data = [
    {
      name: '8/05',
      "Active User": 120,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '9/05',
      "Active User" : 540,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '10/05',
      "Active User": 340,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '11/05',
      "Active User": 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '12/05',
      "Active User": 120,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '13/05',
      "Active User": 390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '14/05',
      "Active User": 490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '15/05',
      "Active User": 390,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '16/05',
      "Active User": 420,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '17/05',
      "Active User": 390,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '18/05',
      "Active User": 230,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '19/05',
      "Active User": 240,
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
