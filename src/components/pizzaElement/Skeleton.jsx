import ContentLoader from 'react-content-loader'

const Skeleton = () => {
	return (
		<ContentLoader
			className='pizza-block'
			speed={2}
			width={280}
			height={466}
			viewBox='0 0 280 466'
			backgroundColor='#fe8758'
			foregroundColor='#ffffff'
		>
			<circle cx='136' cy='129' r='107' />
			<rect x='6' y='290' rx='10' ry='10' width='270' height='88' />
			<rect x='11' y='248' rx='10' ry='10' width='260' height='27' />
			<rect x='13' y='398' rx='8' ry='8' width='111' height='37' />
			<rect x='142' y='395' rx='30' ry='30' width='130' height='42' />
		</ContentLoader>
	)
}

export default Skeleton
