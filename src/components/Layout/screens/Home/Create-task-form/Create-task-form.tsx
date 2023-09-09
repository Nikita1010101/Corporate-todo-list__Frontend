import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler, FieldValues } from 'react-hook-form'
import Select from 'react-select'
import styles from './Create-task-form.module.scss'
import { statusOptions } from './Create-task-form.data'

export const CreateTaskForm: FC = () => {
	const [status_value, set_status_value] = useState<string | undefined>(
		statusOptions[0].value
	)
	const { handleSubmit, register } = useForm()

	const onSubmit: SubmitHandler<FieldValues> = data => {
		console.log({ ...data, status: status_value })
	}

	return (
		<div onClick={event => event.stopPropagation()} className={styles.form}>
			<h1>Create Task</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='Enter Title'
					{...register('title', { required: true })}
					type='text'
				/>
				<input
					placeholder='Enter Description'
					{...register('description', { required: true })}
					type='text'
				/>
				<input
					placeholder='Enter Deadline'
					{...register('deadline', {
						required: true,
						pattern: /\d{2}.\d{2}.\d{4}/
					})}
					type='text'
				/>
				<input
					placeholder='Enter Responsible ID'
					{...register('responsible_id', {
						required: true,
						min: 0,
						max: 1_000_000_000
					})}
					type='number'
				/>
				<div className={styles.status}>
					<h4>Status :</h4>
					<Select
						onChange={event => set_status_value(event?.value)}
						className={styles.options}
						options={statusOptions}
						defaultValue={statusOptions[0]}
					/>
				</div>
				<input
					className={styles.btn_submit}
					type='submit'
					title='Create Task'
					value='Create Task'
				/>
			</form>
		</div>
	)
}

/*

	title: string
	description: string
	deadline: string
	update_date: string
	priority: 'high' | 'medium' | 'low'
	status: boolean

*/
