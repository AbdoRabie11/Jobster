import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const AreaChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey='data' />
    <YAxis allowDecimals={false} />
    <Tooltip />
    <Area type='monotone' dataKey='count' stroke='#1e3a8a' fill='#3b82f6' />
  </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent