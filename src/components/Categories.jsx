const Categories = ({ id, setId }) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	]
	return (
		<div className='categories'>
			<ul>
				{categories.map((element, index) => (
					<li
						className={id === index ? 'active' : ''}
						onClick={() => setId(index)}
						key={index}
					>
						{element}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
