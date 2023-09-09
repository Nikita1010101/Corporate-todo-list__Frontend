import { IUser } from './user.type'

export interface IRegistrationBody extends IUser {
	email: string
	password: string
	supervisor_id?: number
}

export interface ILoginBody {
  email: string
  password: string
}

export interface ILoginData {
	user: IUser
	access_token: string
}
