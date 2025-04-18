import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AdminChart = ({ allInfo }) => {
  return (
    <div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={allInfo?.bestSellingData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="title" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="count"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="count" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="count" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminChart;
