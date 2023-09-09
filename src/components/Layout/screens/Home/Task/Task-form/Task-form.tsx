import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler, FieldValues } from 'react-hook-form'
import styles from './Task-form.module.scss'

export const TaskForm: FC = () => {
	const { handleSubmit, register } = useForm()

	const onSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data)
	}
	return (
		<div className={styles.form}>
			<h1>Task</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='Enter your email'
					{...register('email', { required: true })}
					type='email'
				/>
				<input
					placeholder='Enter password'
					{...register('password', { required: true })}
					type='password'
				/>
				<input
					className={styles.btn_submit}
					type='submit'
					title='Login in system'
					value='Login'
				/>
			</form>
		</div>
	)
}
