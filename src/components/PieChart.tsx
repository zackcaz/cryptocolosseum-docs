import React from 'react';
import { Pie } from '@ant-design/charts';

const PieChart: React.FC<{ data:{type:string, value:number}[] }> = ({ data }) => {
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default PieChart