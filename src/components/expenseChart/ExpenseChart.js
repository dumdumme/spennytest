/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  AreaChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Area,
  YAxis,
} from 'recharts';
import styles from './styles.module.css';

type ExpenseChartProps = {
  chartData: Array,
};

type CustomTickProps = {
  payload: Object,
  x: any,
  y: any,
};

function ExpenseChart({ chartData }: ExpenseChartProps) {
  function CustomTick({ x, y, payload }: CustomTickProps) {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={20} className={styles.customTick} fill="#1d3041">
          {payload.value}
        </text>
      </g>
    );
  }
  return (
    <AreaChart
      width={window.innerWidth}
      height={285}
      data={chartData}
      margin={{ top: 10, left: 0, bottom: 0, right: 0 }}
      baseValue={1}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffb6bb" stopOpacity={0.8} />
          <stop
            offset="95%"
            stopColor="rgba(246, 230, 231, 0)"
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="5%"
            stopColor="rgba(94, 206, 177, 0.49)"
            stopOpacity={0.8}
          />
          <stop
            offset="95%"
            stopColor="rgba(94, 206, 177, 0)"
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="x"
        tick={{ fill: '#77869e', fontSize: 13 }}
        interval="preserveStartEnd"
        tickLine={false}
        axisLine={false}
        tickCount={10}
        padding={{ left: 5, right: 5 }}
        minTickGap={0}
      />
      <YAxis
        tickFormatter={(tick) => tick}
        tickLine={false}
        axisLine={false}
        tick={<CustomTick />}
        width={1}
        tickCount={4}
      />
      <CartesianGrid strokeDasharray="3" vertical={false} />
      <Tooltip cursor={{ stroke: '#77869e', strokeWidth: 1 }} />
      <Area
        type="monotone"
        dataKey="dataset0"
        stroke="#f24750"
        fillOpacity={0.5}
        fill="url(#colorUv)"
        isAnimationActive={false}
        strokeWidth={3}
        activeDot={{ stroke: '#f46069', fill: '#ffffff' }}
      />
      <Area
        type="monotone"
        dataKey="dataset1"
        stroke="#4df1a1"
        fillOpacity={0.5}
        fill="url(#colorPv)"
        isAnimationActive={false}
        strokeWidth={3}
        activeDot={{ stroke: '#4df1a1', fill: '#ffffff' }}
      />
    </AreaChart>
  );
}

export default ExpenseChart;
