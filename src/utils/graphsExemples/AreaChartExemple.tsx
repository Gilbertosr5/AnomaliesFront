import "./style.css";
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';
import { areaExempleData } from "../exemples";

export function AreaChartExemple(){
  return(
    <div className="section">
      <h2 className="section-title">
        AreaChartExemple
      </h2>
      <AreaChart
        width={420}
        height={250}
        data={areaExempleData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stackId="1" stroke="#F0883E" fill="#f0883e61" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#C9D1D9" fill="#82ca9e67" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc75865" />
      </AreaChart>
    </div>
  )
}
