import { Component } from 'react'
import styles from './EmployeesAddForm.module.sass'

class EmployeesAddForm extends Component {
	state = {
		name: '',
		salary: '',
	}

	onValueChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmit = e => {
		e.preventDefault()
		if (e.target.name.value.length > 1 && e.target.salary.value.length) {
			this.props.onAdd(this.state.name, this.state.salary)
			this.setState({
				name: '',
				salary: '',
			})
		}
	}

	render() {
		const { name, salary } = this.state
		return (
			<div className={styles.AddFormWrap}>
				<h3 className={styles.AddFormTitle}>Добавьте нового сотрудника</h3>
				<form className={styles.AddForm} onSubmit={this.onSubmit}>
					<input
						className={styles.AddFormName}
						type='text'
						placeholder='Имя Фамилия'
						name='name'
						value={name}
						onChange={this.onValueChange}
					/>

					<input
						className={styles.AddFormSalary}
						type='number'
						inputMode='numeric'
						pattern='[0-9]*'
						placeholder='З/П в $'
						name='salary'
						value={salary}
						onChange={this.onValueChange}
					/>
					<button className={styles.AddFormBtn} type='submit'>
						Добавить
					</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm
