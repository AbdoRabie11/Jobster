import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from 'react-toastify';
import { addUserTolocalStorage, getUserFromLocalStorage, removeUserFromLocal } from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage()
}

export const registerUser = createAsyncThunk(
  'user/registerUser',

  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/register', user);
      return resp.data
    } catch (error) {
      toast.error(error.response.data.msg)
     return thunkAPI.rejectWithValue(error.response.data.msg)
    }

  }
)

export const updateUser = createAsyncThunk('user/updateUser', 

async(user, thunkAPI) => {
  try {
    const res = await customFetch.patch('/auth/updateUser', user , {
      headers: {
        authorization : `Bearer ${thunkAPI.getState().user.user.token}`
      }
    });
    return res.data
  } catch(error) {
    console.log(error);
  }
}

)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async(user, thunkAPI) => {
      try{
        const resp = await customFetch.post('/auth/login', user);
        return resp.data;
      } catch(error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)

      }
  }
)


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toogleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    logOutUser: (state, {payload}) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocal();
      if(payload) {
        toast.success(payload)
      }
    }
  },
  extraReducers: {
    [registerUser.pending] : (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled] : (state, {payload}) => {
      const {user} = payload;
      state.isLoading = false;
      state.user = user;
      addUserTolocalStorage(user)
      toast.success(`Hello There ${user.name}`)
    },
    [registerUser.rejected] : (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload)
    },

  [loginUser.pending] : (state) => {
    state.isLoading = true;
  },
  [loginUser.fulfilled] : (state, {payload}) => {
    const {user} = payload;
    state.isLoading = false;
    state.user = user;
    addUserTolocalStorage(user)
    toast.success(`welcome back ${user.name}`)
  },
  [loginUser.rejected] : (state, {payload}) => {
    state.isLoading = false;
    toast.error(payload)
  },

  [updateUser.pending] : (state) => {
    state.isLoading = true;
  },
  [updateUser.fulfilled] : (state, {payload}) => {
    const {user} = payload;
    state.isLoading = false;
    state.user = user;
    addUserTolocalStorage(user)
    toast.success(`user updated`)
  },
  [updateUser.rejected] : (state, {payload}) => {
    state.isLoading = false;
    toast.error(payload)
  }

},
})

export const {toogleSidebar , logOutUser } =  userSlice.actions
export default userSlice.reducer;
