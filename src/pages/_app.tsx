import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import ProgressBar from 'nextjs-progressbar'

import store from '@/store/store'
import { NextPage } from 'next'

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<ProgressBar
				color='#29d'
				startPosition={0.4}
				stopDelayMs={200}
				height={2}
				showOnShallow={true}
				options={{ easing: 'ease', speed: 500 }}
			/>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

export default App
