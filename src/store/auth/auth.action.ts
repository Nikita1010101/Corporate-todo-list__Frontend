import { createAsyncThunk } from '@reduxjs/toolkit'

import { ILoginBody, IRegistrationBody } from '@/types/auth.types'
import { AuthService } from 'services/auth/auth.service'

export const registration = createAsyncThunk(
	'auth/registration',
	async (body: IRegistrationBody, thunkApi) => {
		try {
			const { data } = await AuthService.registration(body)
			return data
		} catch (error) {
			thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async (body: ILoginBody, thunkApi) => {
		try {
			const { data } = await AuthService.login(body)
			return data
		} catch (error) {
			thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout',
	async (_, thunkApi) => {
		try {
			const { data } = await AuthService.logout()
			return data
		} catch (error) {
			thunkApi.rejectWithValue(error)
		}
	}
)