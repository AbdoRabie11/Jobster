import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { showStats } from "../../features/AllJobs/allJobsSlice"
import { StatsContainer, ChartContainer  } from "../../components"
const Stats = () => {
  const {isLoading ,monthlyApplications } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showStats())
  }, [])
  return (
    <>
    <StatsContainer />
    {monthlyApplications.length > 0 && <ChartContainer /> }
    </>
  )
}

export default Stats