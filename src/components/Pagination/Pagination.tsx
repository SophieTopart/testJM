import Pagination from 'rc-pagination'
import styles from './Pagination.module.scss'

interface IPaginationItem {
	total: number | undefined
	current: number
	pageSize: number
	onChange: (p: number) => void
	prevIcon: string
	nextIcon: string
}

const PaginationItem = ({
	total,
	current,
	pageSize,
	onChange,
	prevIcon,
	nextIcon,
}: IPaginationItem) => {
	return (
		<div>
			<Pagination
				prevIcon={prevIcon}
				nextIcon={nextIcon}
				className={styles.pagination}
				pageSize={pageSize}
				simple
				defaultCurrent={1}
				current={current}
				total={total}
				onChange={onChange}
				locale={{
					items_per_page: 'Items per page',
					jump_to: 'Jump to',
					jump_to_confirm: 'Jump to confirm',
					page: 'page',
					prev_page: 'Previous page',
					next_page: 'Next page',
					prev_5: 'Previos 5 pages',
					next_5: 'Next 5 pages',
					prev_3: 'Previos 3 pages',
					next_3: 'Next 3 pages',
				}}
			/>
		</div>
	)
}

export default PaginationItem
