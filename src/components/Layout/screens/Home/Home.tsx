import React, { FC, useState } from 'react'
import Select from 'react-select'
import cn from 'classnames'
import styles from './Home.module.scss'

import { Layout } from '../../Layout'
import { CreateTaskForm } from './Create-task-form/Create-task-form'
import { sortOptions } from './Home.data'
import { taskApi } from '@/store/task/task.api'
import { Task } from './Task/Task'
import { useTypedSelector } from '@/hooks/use-typed-selector'

export const Home: FC = () => {
	const [is_form, set_is_form] = useState<boolean>(false)
	const [sort_value, set_sort_value] = useState<string | undefined>(
		sortOptions[0].value
	)
	const { user } = useTypedSelector(state => state.auth)
	const { data: tasks, isLoading: is_loading } = taskApi.useGetTaskQuery(null)
	return (
		<Layout title={'Home Page'} description={'Home Page'}>
			<div className={styles.home}>
				<div
					onClick={() => set_is_form(false)}
					className={cn(styles.create_task_form, { [styles.active]: is_form })}
				>
					<CreateTaskForm />
				</div>
				<h2
					className={styles.full_name}
				>{`${user?.name} ${user?.last_name} ${user?.sure_name}`}</h2>
				<button
					onClick={() => set_is_form(prev => !prev)}
					className={styles.btn_new_task}
				>
					Create New Task
				</button>
				<div className={styles.sorting}>
					<h4>Sort By :</h4>
					<Select
						onChange={event => set_sort_value(event?.value)}
						className={styles.options}
						options={sortOptions}
						defaultValue={sortOptions[0]}
					/>
				</div>
				<div className={styles.tasks_list}>
					{is_loading ? (
						<h2>loading</h2>
					) : tasks?.length === 0 ? (
						<h2>The list is empty</h2>
					) : (
						tasks?.map(task => <Task key={task.id} {...task} />)
					)}
				</div>
			</div>
		</Layout>
	)
}
