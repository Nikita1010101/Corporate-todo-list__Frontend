import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducer'
import { taskApi } from './task/task.api'

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(taskApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>

export default store
