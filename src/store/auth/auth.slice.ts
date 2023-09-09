import { createSlice } from '@reduxjs/toolkit'

import { IAuthInitialState } from './auth.interface'
import { login, logout, registration } from './auth.action'

export const initialState: IAuthInitialState = {
	user: null,
	access_token: '',
	is_loading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthData: (state, { payload }) => {
			state.user = payload.user
			state.access_token = payload.access_token
		},
		logout: state => {
			state.user = null
			state.access_token = ''
			state.is_loading = false
		}
	},
	extraReducers: builder => {
		builder
			.addCase(registration.pending, state => {
				state.is_loading = true
			})
			.addCase(registration.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.access_token = payload.access_token
				state.is_loading = false
			})
			.addCase(registration.rejected, state => {
				state.user = null
				state.access_token = ''
				state.is_loading = false
			})
			.addCase(login.pending, state => {
				state.is_loading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.access_token = payload.access_token
				state.is_loading = false
			})
			.addCase(login.rejected, state => {
				state.user = null
				state.access_token = ''
				state.is_loading = false
			})
			.addCase(logout.pending, state => {
				state.is_loading = true
			})
			.addCase(logout.fulfilled, state => {
				state.user = null
				state.access_token = ''
				state.is_loading = false
			})
			.addCase(logout.rejected, state => {
				state.user = null
				state.access_token = ''
				state.is_loading = false
			})
	}
})

export const actions = authSlice.actions
