import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminChartVertical = ({ allInfo }) => {
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={allInfo?.bestSellingData || []}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis
            dataKey="title"
            type="category"
            scale="band"
            width={200} // increase label space
            tick={{ fontSize: 14 }} // optional: adjust font
            tickFormatter={(value) =>
              value.length > 30 ? `${value.slice(0, 30)}...` : value
            }
          />
          <Tooltip />
          <Legend />
          <Area dataKey="count" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
          <Line dataKey="count" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminChartVertical;
