import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const salesAndOrderData = [
  {
    timePeriod: '6/30/2024-7/6/2024',
    sales: 1404,
    orders: 4,
    AvgOrderValue: 351.00,
  },
  {
    timePeriod: '6/30/2024-7/6/2024',
    sales: 800,
    orders: 2,
    AvgOrderValue: 400,
  },
  {
    timePeriod: '6/30/2024-7/6/2024',
    sales: 800,
    orders: 1.1,
    AvgOrderValue: 727.28,
  }
];

export default class Linechart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-double-y-axes-2stmj2';

  render() {
    return (
      <ResponsiveContainer width="97%" height="75%">
        <LineChart
          width={800}
          height={300}
          data={salesAndOrderData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timePeriod" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#fa933e" activeDot={{ r: 8 }} />
          <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#6ef0eb" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
