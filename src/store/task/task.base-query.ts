import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta
} from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

import { actions } from '@/store/auth/auth.slice'
import { TypeRootState } from '../store'

export const mutex = new Mutex()

export const baseQuery = fetchBaseQuery({
	baseUrl: `${process.env.SERVER_URL}/api`,
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as TypeRootState).auth.access_token

		if (token) {
			headers.set('Content-Type', 'application/json')
			headers.set('authorization', `Bearer ${token}`)
		}

		return headers
	}
})

export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError,
	object,
	FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
	await mutex.waitForUnlock()

	let result = await baseQuery(args, api, extraOptions)

	if (result.error && result.error.status === 401) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire()

			try {
				const refreshResult = await baseQuery(
					{
						url: `${process.env.SERVER_URL}/api/auth/refresh`,
						credentials: 'include'
					},
					api,
					extraOptions
				)

				if (refreshResult.data) {
					api.dispatch(actions.setAuthData(refreshResult.data))

					result = await baseQuery(args, api, extraOptions)
				} else {
					api.dispatch(actions.logout())
					window.location.href = '/login'
				}
			} finally {
				release()
			}
		} else {
			await mutex.waitForUnlock()

			result = await baseQuery(args, api, extraOptions)
		}
	}

	if (result.error && result.error.status === 500) {
		window.location.href = '/login'
	}

	return result
}
