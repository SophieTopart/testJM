import { useEffect } from 'react'
import axios from 'axios'
import BeautyProducts from '../../assets/images/beauty-products.jpg'
import styles from './ProductSearch.module.scss'

function ProductSearch() {
	const getData = async () => {
		try {
			const response = await axios.get(
				'https://thawing-scrubland-03171.herokuapp.com/https://skincare-api.herokuapp.com/products'
			)
			console.log(response.data)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getData()
	}, [])

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
					<input></input>
					<button>Search</button>
				</div>
			</div>
		</>
	)
}

export default ProductSearch
