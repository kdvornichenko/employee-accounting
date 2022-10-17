import styles from './App.module.sass'
import Header from '../Header/Header'
import SearchPanel from '../SearchPanel/SearchPanel'
import Filter from '../Filter/Filter'
import EmployeesList from '../EmployeesList/EmployeesList'
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm'
import { Component } from 'react'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: [
				{
					name: 'John',
					salary: 800,
					increase: true,
					rise: true,
					id: 1,
				},
				{
					name: 'Alex',
					salary: 900,
					increase: false,
					rise: false,
					id: 2,
				},
				{
					name: 'Tom',
					salary: 1000,
					increase: false,
					rise: false,
					id: 3,
				},
			],
			term: '',
			filter: 'all',
		}
		this.maxId = 4
	}

	deleteItem = id => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id),
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return { data: newArr }
		})
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			}),
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items
		}

		return items.filter(item => {
			return item.name.toLowerCase().indexOf(term) > -1
		})
	}

	onUpdateSearch = term => {
		this.setState({ term })
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise)
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	onFilterSelect = filter => {
		this.setState({ filter })
	}

	render() {
		const { data, term, filter } = this.state
		const employees = this.state.data.length
		const increased = this.state.data.filter(item => item.increase).length
		const visibleData = this.filterPost(this.searchEmp(data, term), filter)

		return (
			<div className={styles.App}>
				<Header employees={employees} increased={increased} />
				<div className={styles.AppSearchPanelWrap}>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<Filter
						onRiseClick={this.onRiseClick}
						filter={filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App
