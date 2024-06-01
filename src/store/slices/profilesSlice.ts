// features/auth/authSlice.js
import { ProfilesService } from '@/api/ProfilesService'
import { IProfile } from '@/types/profile.types'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProfiles = createAsyncThunk("profiles/getAll", async () => {
  const {data} = await ProfilesService.getAll()
  return {Profiles:data}
}) 

export const getProfile = createAsyncThunk<any,string>("profiles/getOne", async (id) => {
  const {data} = await ProfilesService.getOne(id)
  return {Profile:data}
}) 

interface IProfilesSlice {
  items: IProfile[]
  active: IProfile | null;

  loadingAll:boolean;
  loadingActive:boolean;
}

const initialState:IProfilesSlice  = {
  items: [],
  active: null,
  loadingAll:false,
  loadingActive:false,
}

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfile(state,action:PayloadAction<{profile:IProfile}>){
      state.active = action.payload?.profile
    }
  },
  extraReducers: 
  builder=>builder
    .addCase(getProfiles.pending, (state) => {
      state.loadingAll = true;
    }) 
    .addCase(getProfiles.fulfilled, (state,action) => {
      const {Profiles} = action.payload
      state.loadingAll = false;
      state.items = Profiles
    }) 
    .addCase(getProfile.pending, (state) => {
      state.loadingActive = true;
    }) 
    .addCase(getProfile.fulfilled, (state,action) => {
      const {Profile} = action.payload
      state.loadingActive = false;
      state.active = Profile
    }) 

})

export const profilesActions = profilesSlice.actions
export const profilesReducer =  profilesSlice.reducer
