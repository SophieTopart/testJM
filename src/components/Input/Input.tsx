import { ChangeEvent } from 'react'
import styles from './Input.module.scss'

interface IInput {
	name: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ name, value, onChange }: IInput) => {
	return (
		<input
			className={styles.input}
			name={name}
			value={value}
			onChange={onChange}
		></input>
	)
}

export default Input
