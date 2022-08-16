import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { createJobThunk, deleteJobThunk, editJobThunk} from './jobThunk';
import { showLoading, hideLoading , getAllJobs } from '../AllJobs/allJobsSlice';
const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const createJob = createAsyncThunk('job/createJob', 

// async(job, thunkAPI) => {
//   try {
//     const res = await customFetch.post('/jobs', job , {
//       headers: {
//         authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
//       },
//     })
//     thunkAPI.dispatch(clearValues())
//     return res.data;
//   } catch(error) {
//     // if(error.response.status === 401) {
//     //   thunkAPI.dispatch(logOutUser())
//     // }
//     return thunkAPI.rejectWithValue(error.response.data.msg)
//   }
// }  
createJobThunk

)

export const editJob = createAsyncThunk('job/editJob',
//  async({jobId, job} , thunkAPI) => {
//   try {
//     const res = await customFetch.patch(`/jobs/${jobId}`, job , {
//       headers: {
//         authorization: `Bearer ${thunkAPI.getState().user.user.token}`
//       }
//     })
//     thunkAPI.dispatch(clearValues)
//     return res.data
//   } catch(error) {
//     console.log(error);
//     return thunkAPI.rejectWithValue(error.response.data.msg)

//   }
//  } 
 editJobThunk
 )

export const deleteJob = createAsyncThunk('job/deleteJob', 
//   async(jodId, thunkAPI) => {
//     thunkAPI.dispatch(showLoading())
//     try {
//       const res = await customFetch.delete(`/jobs/${jodId}`, {
//         headers: {
//           authorization: `Bearer ${thunkAPI.getState().user.user.token}`
//         }
//       })
//       thunkAPI.dispatch(getAllJobs())
//       return res.data
//     }  catch(error) {
//       thunkAPI.dispatch(hideLoading())
//       return thunkAPI.rejectWithValue(error.response.data.msg)
//     }
// }
deleteJobThunk
)

const jobSlice = createSlice({
  name: 'job',
  initialState,

  reducers: {
    handleChange: (state, {payload: {name, value}}) => {
      state[name] = value
    },
    clearValues: () => {
      return initialState
    },
    setEditJob: (state, {payload}) => {
      return {...state, isEditing: true,...payload }
    }
  },

  extraReducers: {
    [createJob.pending] : (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled] : (state) => {
      state.isLoading = false;
      toast.success('job created')
    },
    [createJob.rejected] : (state , {payload}) => {
      state.isLoading = false
      toast.error(payload)
    },

    [editJob.pending] : (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled] : (state) => {
      state.isLoading = false;
      toast.success('job Edited...')
    },
    [editJob.rejected] : (state , {payload}) => {
      state.isLoading = false
      toast.error(payload)
    }

  }
})
export const {handleChange , clearValues , setEditJob} = jobSlice.actions;
export default jobSlice.reducer