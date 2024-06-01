import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {rootReducer} from './rootReducer.ts'
import { useSelector } from 'react-redux'
// ...

const store = configureStore({reducer:rootReducer})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector = useSelector.withTypes<RootState>()

export default store
