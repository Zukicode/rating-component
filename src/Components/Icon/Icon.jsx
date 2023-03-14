//Style
import styles from './Icon.module.scss'

//Icon
import starIcon from 'assets/images/icon-star.svg'

export const Icon = () => {
	return (
		<div className={styles.icon}>
			<div className={styles.iconBorder}>
				<img src={starIcon} alt='star' />
			</div>
		</div>
	)
}
