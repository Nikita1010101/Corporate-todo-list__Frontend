import { IDefaultValues } from './default.types'

export interface IUser {
	name: string
	last_name: string
	sure_name: string
}

export interface IUserDto extends IDefaultValues {
	name: string
	last_name: string
	sure_name: string
}

export interface IUser extends IUserDto {
	email: string
	password: string
}

export interface ISupervisor extends IDefaultValues {
	userId: number
	subordinate_id: number
}

export interface ICreator extends IDefaultValues {
	user_id: number
	taskId: number
}

export interface IResponsible extends IDefaultValues {
	user_id: number
	taskId: number
}
