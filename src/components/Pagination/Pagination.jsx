import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

const Pagination = ({ onChange }) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={event => onChange(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel='<'
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
