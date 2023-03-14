//Style
import styles from './Button.module.scss'

export const Button = ({ number, handleClick, selected }) => {
	return (
		<button
			className={
				number === selected ? `${styles.btn} ${styles.active}` : styles.btn
			}
			onClick={handleClick}
		>
			{number}
		</button>
	)
}
