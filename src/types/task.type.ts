import { IDefaultValues } from './default.types'
import { IUser } from './user.type'

export interface ITask extends IDefaultValues {
	title: string
	description: string
	deadline: string
	update_date: string
	priority: 'high' | 'medium' | 'low'
	status: boolean
	userId: number
}

export interface IGetTask extends ITask {
	responsible: IUser
}

export interface ICreateTask extends Omit<ITask, 'userId'> {
	creator_id: number
	responsible_id: number
}
