import styles from './Button.module.scss'

interface IButton {
	name: string
	onClick: (e: any) => void
}

const Button = ({ name, onClick }: IButton) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{name}
		</button>
	)
}

export default Button
