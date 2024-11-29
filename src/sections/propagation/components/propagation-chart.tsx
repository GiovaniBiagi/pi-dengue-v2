"use client";

import { DengueData } from "@/services/dengue";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "./custom-tooltip";

type PropagationChartProps = {
  data: Array<DengueData>;
};

export const PropagationChart = ({ data }: PropagationChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart width={730} height={250} data={data}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />

        <Area
          type="monotone"
          dataKey="value"
          stroke="#1d4ed8"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
