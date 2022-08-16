import { useEffect } from 'react';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllJobs } from '../features/AllJobs/allJobsSlice';

const JobsContainer = () => {
  const {isLoading, jobs} = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [])

  if(isLoading) {
    return (
      <Wrapper>
        <h2>Loading....</h2>
      </Wrapper>
    )
  }
  if(jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No josbs to return....</h2>
      </Wrapper>
    )
  }

  return <Wrapper>
    <h5> jobs info </h5>
    <div className='jobs'>
    {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
    </div>
  </Wrapper>

}

export default JobsContainer