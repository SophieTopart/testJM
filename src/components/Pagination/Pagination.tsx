import Pagination from 'rc-pagination'
import styles from './Pagination.module.scss'

interface IPaginationItem {
	total: number
}

const PaginationItem = ({ total }: IPaginationItem) => {
	return (
		<Pagination
			prevIcon
			nextIcon
			className={styles.pagination}
			pageSize={10}
			simple
			defaultCurrent={1}
			total={total}
		/>
	)
}

export default PaginationItem
