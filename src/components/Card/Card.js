import React from 'react';

function Card () {
	return (
		<div className="card">
			<div className="favorite">
				<img src="/img/unliked.svg" alt="some-img" />
			</div>
			<img width={133} height={112} src="/img/sneakers/1.jpg" alt=""></img>
				<p className='h5'>Мужские кроссовки Nike Blazer Mid Suede</p>
			<div className="cardBottom d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span className="price">Цена:</span>
					<b>12 999 руб.</b>
				</div>
				<button className="button">
					<img width={11} height={11} src="/img/plus.svg" alt="some_text"></img>
				</button>
			</div>
		</div>
	);
}

export default Card;
