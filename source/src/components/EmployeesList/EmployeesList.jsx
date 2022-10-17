import EmployeesListItem from '../EmployeesListItem/EmployeesListItem'
import styles from './EmployeesList.module.sass'

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
	const employees = data.map(employee => {
		const { id, ...employeeProps } = employee

		return (
			<EmployeesListItem
				{...employeeProps}
				key={id}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => {
					onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
				}}
			/>
		)
	})

	return <ul className={styles.EmployeesList}>{employees}</ul>
}

export default EmployeesList
