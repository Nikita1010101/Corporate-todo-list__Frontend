import React, { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

import { ILayout } from './Layout.interface'
import { Navbar } from './Navbar/Navbar'

export const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	description
}) => {
	return (
		<>
			<title>{title}</title>
			<meta name='description' content={description} />
			<Navbar />
			<main className={styles.layout}>{children}</main>
		</>
	)
}
