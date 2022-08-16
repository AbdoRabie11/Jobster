import customFetch from '../../utils/axios';
import { clearValues } from './jobSlice';
import { showLoading, getAllJobs, hideLoading } from '../AllJobs/allJobsSlice';


export const createJobThunk =
async(job, thunkAPI) => {
  try {
    const res = await customFetch.post('/jobs', job , {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(clearValues())
    return res.data;
  } catch(error) {
    // if(error.response.status === 401) {
    //   thunkAPI.dispatch(logOutUser())
    // }
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const deleteJobThunk =   async(jodId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  try {
    const res = await customFetch.delete(`/jobs/${jodId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`
      }
    })
    thunkAPI.dispatch(getAllJobs())
    return res.data
  }  catch(error) {
    thunkAPI.dispatch(hideLoading())
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const editJobThunk =  async({jobId, job} , thunkAPI) => {
  try {
    const res = await customFetch.patch(`/jobs/${jobId}`, job , {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`
      }
    })
    thunkAPI.dispatch(clearValues)
    return res.data
  } catch(error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.msg)

  }
 }