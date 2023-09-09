import React, { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Task.module.scss'

import { IGetTask } from '@/types/task.type'
import { TaskForm } from './Task-form/Task-form'

export const Task: FC<IGetTask> = ({
	title,
	priority,
	deadline,
	responsible,
	status
}) => {
	const [is_task_info, set_is_task_info] = useState<boolean>(false)
	const { name, last_name, sure_name } = responsible

	const checkIsOverdue = () => {
		const curentDate = new Date()
		const deadlineDate = new Date(deadline)
		const isOverDue = curentDate > deadlineDate
		return isOverDue
	}
	return (
		<div onClick={() => set_is_task_info(true)} className={styles.task}>
			<div className={styles.info_form}>{/* <TaskForm /> */}</div>
			<h3
				className={cn({
					[styles.overdue]: checkIsOverdue(),
					[styles.completed]: status
				})}
			>
				{title}
			</h3>
			<hr />
			<div>
				<h3>Priority</h3>
				<h3>{priority}</h3>
			</div>
			<div>
				<h3>Deadline</h3>
				<h3>{deadline}</h3>
			</div>
			<div>
				<h3>Full Name</h3>
				<h3>{`${name} ${last_name} ${sure_name}`}</h3>
			</div>
			<div>
				<h3>Status</h3>
				<h3>{status ? 'Completed' : 'Not completed'}</h3>
			</div>
		</div>
	)
}
