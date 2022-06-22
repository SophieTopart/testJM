import { useState, ChangeEvent } from 'react'
import axios from 'axios'
import BeautyProducts from '../../assets/images/beauty-products.jpg'
import styles from './ProductSearch.module.scss'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
// import PaginationItem from '../../components/Pagination/Pagination'

interface ISearchData {
	brand: string
	id: Number
	ingredient_list: string[]
	name: string
}

function ProductSearch() {
	const [inputData, setInputData] = useState('')
	const splitData = inputData && inputData.toLowerCase().split(' ').join('+')

	const [searchData, setSearchData] = useState<ISearchData[]>()

	const getData = async () => {
		try {
			const response = await axios.get<ISearchData[]>(
				`https://thawing-scrubland-03171.herokuapp.com/https://skincare-api.herokuapp.com/product?q=${splitData}`
			)
			setSearchData(response.data)
		} catch (err) {
			console.error(err)
		}
	}

	const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		setInputData(e.target.value)
	}

	const slicedData = searchData && searchData.slice(0, 15)

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
						value={inputData}
						onChange={(e) => changeInputValue(e)}
					/>
					<Button
						onClick={() => getData()}
						name='Search'
						disabled={!inputData}
					/>
				</div>
				<div>
					<ul>
						{slicedData &&
							slicedData.map((item, index) => (
								<li className={styles.listItem} key={index}>
									{firstLetterToUpperCase(item.brand)} -{' '}
									{firstLetterToUpperCase(item.name)}
								</li>
							))}
						{slicedData?.length === 0 && <p>No product found</p>}
					</ul>
				</div>
				{/* {searchData && <PaginationItem total={searchData.length} />} */}
			</div>
		</>
	)
}

export default ProductSearch
