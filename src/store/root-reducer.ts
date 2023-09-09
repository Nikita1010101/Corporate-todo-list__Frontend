import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { taskApi } from './task/task.api'

export const rootReducer = combineReducers({
	auth: authSlice.reducer,
	[taskApi.reducerPath]: taskApi.reducer,
})
