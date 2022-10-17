import { Component } from 'react'
import styles from './SearchPanel.module.sass'

class SearchPanel extends Component {
	constructor(props) {
		super(props)

		this.state = {
			term: '',
		}
	}

	onUpdateSearch = e => {
		const term = e.target.value
		this.setState({ term })
		this.props.onUpdateSearch(term.toLowerCase())
	}

	render() {
		return (
			<input
				type='text'
				placeholder='Найти струдника'
				className={styles.SearchPanelInput}
				value={this.state.term}
				onChange={this.onUpdateSearch}
			/>
		)
	}
}

export default SearchPanel
