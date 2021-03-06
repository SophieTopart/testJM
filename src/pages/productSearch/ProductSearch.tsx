import { useState, ChangeEvent, useEffect } from 'react'
import axios from 'axios'
import BeautyProducts from '../../assets/images/beauty-products.jpg'
import styles from './ProductSearch.module.scss'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import PaginationItem from '../../components/Pagination/Pagination'

interface ISearchData {
	brand: string
	id: Number
	ingredient_list: string[]
	name: string
}

function ProductSearch() {
	const [inputQuery, setInputQuery] = useState('')
	const splitQuery = inputQuery && inputQuery.toLowerCase().split(' ').join('+')
	const [searchData, setSearchData] = useState<ISearchData[]>()

	// PAGINATION
	const [collection, setCollection] = useState<ISearchData[]>()
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(15)
	const updatePage = (p: number) => {
		setCurrentPage(p)
		const to = itemsPerPage * p
		const from = to - itemsPerPage
		setCollection(searchData?.slice(from, to))
	}
	const lastPage = !searchData ? 1 : Math.ceil(searchData.length / itemsPerPage)

	const getData = async () => {
		try {
			const response = await axios.get<ISearchData[]>(
				`https://thawing-scrubland-03171.herokuapp.com/https://skincare-api.herokuapp.com/product?q=${splitQuery}`
			)
			setSearchData(response.data)
			setCurrentPage(1)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(
		() => setCollection(searchData?.slice(0, itemsPerPage)),
		[searchData, itemsPerPage]
	)

	const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		setInputQuery(e.target.value)
	}

	const firstLetterToUpperCase = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	return (
		<>
			<div className={styles.topBeauty}>
				<div className={styles.topDivBlue}>
					<p>This is a page for beauty products search</p>
				</div>
				<div className={styles.topDiv}>
					<img
						src={BeautyProducts}
						className={styles.beautyImage}
						alt='Beauty products'
					/>
				</div>
			</div>
			<div className={styles.bottomSearch}>
				<div className={styles.bottomDiv}>
					<Input
						name='inputData'
						value={inputQuery}
						onChange={(e) => changeInputValue(e)}
					/>
					<Button
						onClick={() => getData()}
						name='Search'
						disabled={!inputQuery}
					/>
				</div>
				<div>
					<ul>
						{collection &&
							collection.map((item, index) => (
								<li className={styles.listItem} key={index}>
									{firstLetterToUpperCase(item.brand)} -{' '}
									{firstLetterToUpperCase(item.name)}
								</li>
							))}
						{collection?.length === 0 && <p>No product found</p>}
					</ul>
				</div>
				{collection?.length !== 0 && (
					<PaginationItem
						prevIcon={currentPage === 1 ? ' ' : '< '}
						nextIcon={currentPage === lastPage ? ' ' : ' >'}
						current={currentPage}
						pageSize={itemsPerPage}
						total={searchData?.length}
						onChange={updatePage}
					/>
				)}
			</div>
		</>
	)
}

export default ProductSearch
