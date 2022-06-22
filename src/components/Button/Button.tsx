import styles from './Button.module.scss'

interface IButton {
	name: string
	onClick: (e: any) => void
	disabled?: boolean
}

const Button = ({ name, onClick, disabled }: IButton) => {
	return (
		<button className={styles.button} onClick={onClick} disabled={disabled}>
			{name}
		</button>
	)
}

export default Button
