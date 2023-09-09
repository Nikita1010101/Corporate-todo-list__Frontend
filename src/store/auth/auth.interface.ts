import { IUser } from '@/types/user.type'

export interface IAuthInitialState {
	user: IUser | null
	access_token: string
	is_loading: boolean
}
