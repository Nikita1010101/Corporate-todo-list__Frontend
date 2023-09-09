import axios from 'axios'

import { ILoginBody, IRegistrationBody } from '@/types/auth.types'

export const AuthService = {
	async registration(body: IRegistrationBody) {
		return await axios.post(
			`${process.env.SERVER_URL}/api/auth/registration`,
			body,
			{
				withCredentials: true
			}
		)
	},

	async login(body: ILoginBody) {
		return await axios.post(`${process.env.SERVER_URL}/api/auth/login`, body, {
			withCredentials: true
		})
	},

	async logout() {
		return await axios.delete(`${process.env.SERVER_URL}/api/auth/logout`, {
			withCredentials: true
		})
	}
}
