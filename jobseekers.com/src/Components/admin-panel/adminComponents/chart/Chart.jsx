import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import data from './totalHiredDtata';

const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Last 6 months(Newly Hired Candidates)</div>
      <ResponsiveContainer width="100%"aspect={2 / 1}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#61dafb" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#61dafb" stopOpacity={0} />
            </linearGradient>
            
          </defs>
          <XAxis dataKey="name" stroke='gray' />
          
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'  />
          <Tooltip />
          <Area  
          type="monotone" 
          dataKey="Total" 
          stroke="#61dafb" 
          fillOpacity={1} 
          fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart