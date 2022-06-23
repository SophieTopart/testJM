import Pagination from 'rc-pagination'
import styles from './Pagination.module.scss'

interface IPaginationItem {
	total: number | undefined
	current: number
	pageSize: number
	onChange: (p: number) => void
}

const PaginationItem = ({
	total,
	current,
	pageSize,
	onChange,
}: IPaginationItem) => {
	return (
		<div>
			<Pagination
				prevIcon='< '
				nextIcon=' >'
				className={styles.pagination}
				pageSize={pageSize}
				simple
				defaultCurrent={1}
				current={current}
				total={total}
				onChange={onChange}
			/>
		</div>
	)
}

export default PaginationItem
