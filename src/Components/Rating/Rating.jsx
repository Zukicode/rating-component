//Style
import styles from './Rating.module.scss'

//Icons
import { Button } from 'Components/Button/Button'
import { Icon } from 'Components/Icon/Icon'
import { useState } from 'react'

export const Rating = ({ setShowSubmit }) => {
	const [selected, setSelected] = useState(null)

	const selectRate = number => {
		setSelected(number)
	}

	const submitClick = () => {
		setShowSubmit(true)
		sessionStorage.setItem('rate', selected)
	}

	return (
		<div className={styles.rating}>
			<Icon />

			<div className={styles.title}>
				<h1>How did we do?</h1>
			</div>

			<div className={styles.decription}>
				<p>
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>
			</div>

			<div className={styles.buttonList}>
				{[1, 2, 3, 4, 5].map(buttonElement => (
					<Button
						selected={selected}
						key={buttonElement}
						handleClick={() => selectRate(buttonElement)}
						number={buttonElement}
					/>
				))}
			</div>

			<div className={styles.buttonSumbit}>
				<button onClick={submitClick}>Submit</button>
			</div>
		</div>
	)
}
