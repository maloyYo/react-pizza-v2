import styles from './NotFoundPage.module.scss'

const NotFoundBlock = () => {
	return (
		<div className={styles.container}>
			<h1>
				<span>乁( ͡° ͜ʖ ͡°)ㄏ</span>
				<br />
				Ничего не найдено
			</h1>
			<p>К сожалению такой страницы у нас нет</p>
		</div>
	)
}

export default NotFoundBlock
