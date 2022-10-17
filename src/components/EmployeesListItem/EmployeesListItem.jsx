import styles from './EmployeesListItem.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookie, faTrash, faStar } from '@fortawesome/free-solid-svg-icons'

const EmployeesListItem = props => {
	const { name, salary, onDelete, onToggleProp, increase, rise } = props

	return (
		<li
			className={
				increase ? styles.Employee + ' ' + styles.increase : styles.Employee
			}
		>
			<span
				className={styles.EmployeeName}
				onClick={onToggleProp}
				data-toggle='rise'
			>
				{name}
			</span>
			<input
				className={styles.EmployeeSalary}
				type='number'
				inputMode='numeric'
				pattern='[0-9]*'
				defaultValue={salary}
			/>
			<div className={styles.EmployeeBtns}>
				<button
					className={styles.EmployeeBtnsCookie}
					type='button'
					onClick={onToggleProp}
					data-toggle='increase'
				>
					<FontAwesomeIcon icon={faCookie} />
				</button>
				<button
					className={styles.EmployeeBtnsTrash}
					type='button'
					onClick={onDelete}
				>
					<FontAwesomeIcon icon={faTrash} />
				</button>
				<button
					className={
						rise
							? styles.EmployeeBtnsStar + ' ' + styles.provide
							: styles.EmployeeBtnsStar
					}
				>
					<FontAwesomeIcon icon={faStar} />
				</button>
			</div>
		</li>
	)
}

export default EmployeesListItem
