import React, { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useSelector } from 'react-redux';
const ChartContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications: data} = useSelector((store) => store.allJobs);
  return (
   <Wrapper>
     <h4>monthly Applications</h4>
     <button type='button' onClick={() => setBarChart(!barChart) }>
       {barChart ? 'Area chart': 'Bar chart'}
     </button>
     {barChart ? <BarChart  data={data}/> : <AreaChart data={data} />}
   </Wrapper>
  )
}

export default ChartContainer