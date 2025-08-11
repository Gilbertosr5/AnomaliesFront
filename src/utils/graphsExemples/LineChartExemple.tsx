import "./style.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { lineExempleData } from "../../utils/exemples";

export function LineChartExemple(){
  return(
    <div className="section">
      <h2 className="section-title">
        LineChartExemple
      </h2>
      <LineChart
        width={425}
        height={250}
        data={lineExempleData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#F0883E" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#C9D1D9" />
      </LineChart>
    </div>
  )
}
