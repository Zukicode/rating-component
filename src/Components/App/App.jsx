//Style
import styles from './App.module.scss'

//Components
import { Rating } from 'Components/Rating/Rating'
import { Submit } from 'Components/Submit/Submit'
import { useEffect, useState } from 'react'

export const App = () => {
	const [showSubmit, setShowSubmit] = useState(false)

	useEffect(() => {
		if (sessionStorage.getItem('rate')) setShowSubmit(true)
	}, [])

	return (
		<div className={styles.app}>
			{showSubmit ? (
				<Submit setShowSubmit={setShowSubmit} />
			) : (
				<Rating setShowSubmit={setShowSubmit} />
			)}
		</div>
	)
}
