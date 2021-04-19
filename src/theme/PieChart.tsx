import React from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";

const COLORS=['#7694FF', '#02A164', '#FFD37E', '#E37171']

const Chart: React.FC<{ data: { name: string; value: number }[] }> = ({
  data,
}) => {

  return (
    <PieChart width={800} height={400}>
      <Legend />
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={140} label>
      {
        data.map((_, index) => (
          <Cell key={`slice-${index}`} fill={COLORS[index % 10] as string}/>
        ))
      }
      </Pie>
      <Tooltip trigger="hover" />

    </PieChart>
  );
};

export default Chart;
