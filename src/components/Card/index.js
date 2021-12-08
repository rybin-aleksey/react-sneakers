import React from 'react';
import styles from './Card.module.scss'

function Card(props) {
	return(
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src="/img/unliked.svg" alt="some-img" />
			</div>
			<img width={133} height={112} src={props.imageUrl} alt="some-card"></img>
			<p className={styles.h5}>{props.title}</p>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span className={styles.price}>Цена:</span>
					<b>{props.price} руб.</b>
				</div>
				<button className={styles.button} onClick={props.onClick}>	
					<img width={11} height={11} src="/img/plus.svg" alt="some_text"></img>
				</button>
			</div>
		</div>
	);
}

export default Card;
