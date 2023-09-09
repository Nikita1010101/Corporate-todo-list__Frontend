import React, { FC } from 'react'
import { useRouter } from 'next/router'
import styles from './Navbar.module.scss'

import { useActions } from '@/hooks/use-actions'

export const Navbar: FC = () => {
	const { replace } = useRouter()
	const { logout } = useActions()

	const exit = () => {
		logout()
		replace('/login')
	}

	return (
		<nav className={styles.navbar}>
			<h2 onClick={exit}>Logout</h2>
		</nav>
	)
}
