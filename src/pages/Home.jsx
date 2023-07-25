import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

import Categories from '../components/Categories'
import Pagination from '../components/Pagination/Pagination'
import Sort from '../components/Sort'
import PizzaBlock from '../components/pizzaElement/PizzaBlock'
import Skeleton from '../components/pizzaElement/Skeleton'

const Home = ({ searchValue }) => {
	const [pizzas, setPizzas] = useState([])

	const [isLoading, setIsLoading] = useState(true)

	const [categoriesIndex, setCategoriesIndex] = useState(0)

	const [currentPage, setCurrentPage] = useState(1)

	const [sortType, setSortType] = useState({
		name: 'популярности',
		property: 'rating'
	})

	useEffect(() => {
		setIsLoading(true)
		axios
			.get(
				`https://63b41682ea89e3e3db55de54.mockapi.io/items?page=${currentPage}&limit=4&${
					categoriesIndex > 0 ? `category=${categoriesIndex}` : ''
				}&sortBy=${sortType.property}&order=desc&search=${searchValue}`
			)
			.then(data => {
				setPizzas(data.data)
				setIsLoading(false)
			})
			.catch(error => {
				console.log(error)
			})
		window.scrollTo(0, 0)
	}, [categoriesIndex, sortType, searchValue, currentPage])

	return (
		<>
			<div className='content__top'>
				<Categories
					id={categoriesIndex}
					setId={index => setCategoriesIndex(index)}
				/>
				<Sort sortType={sortType} setSortType={obj => setSortType(obj)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: pizzas.map(item => {
							return <PizzaBlock key={item.id} {...item} />
					  })}
			</div>
			<Pagination onChange={number => setCurrentPage(number)} />
		</>
	)
}

export default Home
