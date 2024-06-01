// features/auth/authSlice.js
import { TemplatesService } from '@/api/TemplatesService'
import { ICreateTemplateDTO, IEditTemplateDTO, ITemplate } from '@/types/templates.types'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const createTemplate = createAsyncThunk<any,ICreateTemplateDTO>("templates/create", async (body) => {
  const {data} = await TemplatesService.create(body)
  return {template:data}
}) 

export const editTemplate = createAsyncThunk<any,IEditTemplateDTO>("templates/edit", async (body) => {
  const {data} = await TemplatesService.edit(body)
  return {template:data}
}) 

export const getTemplates = createAsyncThunk("templates/getAll", async () => {
  const {data} = await TemplatesService.getAll()
  return {templates:data}
}) 

export const getTemplate = createAsyncThunk<any,string>("templates/getOne", async (id) => {
  const {data} = await TemplatesService.getOne(id)
  return {template:data}
}) 

interface ITemplatesSlice {
  
  items: ITemplate[]
  active: ITemplate | null;

  loadingAll:boolean;
  loadingActive:boolean;
  loadingCreate:boolean;
  loadingEdit:boolean;
}

const initialState:ITemplatesSlice  = {
  items: [],
  active: null,
  loadingAll:false,
  loadingActive:false,
  loadingCreate:false,
  loadingEdit:false,
}

const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    setTemplate(state,action:PayloadAction<{template:ITemplate}>){
      state.active = action.payload?.template
    }
  },
  extraReducers: 
  builder=>builder
    .addCase(createTemplate.pending, (state) => {
      state.loadingCreate = true;
    }) 
    .addCase(createTemplate.fulfilled, (state,action) => {
      const {template} = action.payload
      state.loadingCreate = false;
      state.items.push(template)
    }) 
    .addCase(getTemplates.pending, (state) => {
      state.loadingAll = true;
    }) 
    .addCase(getTemplates.fulfilled, (state,action) => {
      const {templates} = action.payload
      state.loadingAll = false;
      state.items = templates
    }) 
    .addCase(getTemplate.pending, (state) => {
      state.loadingActive = true;
    }) 
    .addCase(getTemplate.fulfilled, (state,action) => {
      const {template} = action.payload
      state.loadingActive = false;
      state.active = template
    }) 

    .addCase(editTemplate.pending, (state) => {
      state.loadingEdit = true;
    }) 
    .addCase(editTemplate.fulfilled, (state,action) => {
      const {template} = action.payload
      state.loadingEdit = false;
      state.items = [...state.items.filter(item=>+item.id !== +template.id),template]
    }) 
})

export const templatesActions = templatesSlice.actions
export const templatesReducer =  templatesSlice.reducer
