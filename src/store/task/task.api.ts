import { createApi } from '@reduxjs/toolkit/query/react'

import { IGetTask } from '@/types/task.type'
import { baseQueryWithReauth } from './task.base-query'

export const taskApi = createApi({
	reducerPath: 'task',
	baseQuery: baseQueryWithReauth,
	tagTypes: ['USER'],
	endpoints: builder => ({
		getTask: builder.query<IGetTask[], null>({
			query: () => ({
				url: '/task',
			}),
			providesTags: ['USER']
		})
	})
})
