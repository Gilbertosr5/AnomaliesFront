import "./style.css";
import { XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend, Rectangle } from 'recharts';
import { barExempleData } from "../exemples";

export function BarChartExemple(){
  return(
    <div className="section">
      <h2 className="section-title">
        BarChartExemple
      </h2>
      <BarChart
        width={420}
        height={250}
        data={barExempleData}
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
        <Bar dataKey="pv" fill="#F0883E" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="uv" fill="#58A6FF" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </div>
  )
}
