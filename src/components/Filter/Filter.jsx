import styles from './Filter.module.sass'

const Filter = props => {
	const buttonsData = [
		{ name: 'all', label: 'Все сотрудники' },
		{ name: 'rise', label: 'На повышение' },
		{ name: 'moreThen1000', label: 'З/П больше 1000' },
	]

	const buttons = buttonsData.map(({ name, label }) => {
		const active = props.filter === name
		const clazz = active
			? styles.FilterBtn + ' ' + styles.FilterBtnClicked
			: styles.FilterBtn

		return (
			<button
				className={clazz}
				type='button'
				key={name}
				onClick={() => {
					props.onFilterSelect(name)
				}}
			>
				{label}
			</button>
		)
	})

	return (
		<div className={styles.FilterBtnsWrap}>
			{buttons}
		</div>
	)
}

export default Filter
