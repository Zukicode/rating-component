//Style
import styles from './Submit.module.scss'

//Images
import thankYouImage from 'assets/images/illustration-thank-you.svg'
import { useEffect, useState } from 'react'

export const Submit = ({ setShowSubmit }) => {
	const [selectedFromStorage, setSelectedFromStorage] = useState(null)

	useEffect(() => {
		if (!sessionStorage.getItem('rate')) {
			setShowSubmit(false)
		} else {
			setSelectedFromStorage(sessionStorage.getItem('rate'))
		}
	}, [])

	return (
		<div className={styles.submit}>
			<div className={styles.thankYou}>
				<img src={thankYouImage} alt='thankYou' />
			</div>

			<div className={styles.selected}>
				<p>You selected {selectedFromStorage} out of 5</p>
			</div>

			<div className={styles.title}>
				<h1>Thank you!</h1>
			</div>

			<div className={styles.description}>
				<p>
					We appreciate you taking the time to give a rating. If you ever need
					more support, don’t hesitate to get in touch!
				</p>
			</div>
		</div>
	)
}
