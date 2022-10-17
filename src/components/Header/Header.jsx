import styles from './Header.module.sass'

const Header = ({ employees, increased }) => {
	return (
		<div className={styles.Header}>
			<h1 className={styles.HeaderH1}>Учет сотрудников в компании N</h1>
			<h2 className={styles.HeaderH2}>Общее число сотрудников: {employees}</h2>
			<h2 className={styles.HeaderH2}>Премию получат:{increased}</h2>
		</div>
	)
}

export default Header
