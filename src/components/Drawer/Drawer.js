import React from 'react';

function Drawer() {
	return(
		<div style={{ display: 'none' }} className="overlay">
			<div className="drawerBlock">
				<div className="headline">
					<h2 className="mb-30">Корзина <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove" /></h2>
				</div>
				<div className="items">
					<div className="cartItem d-flex align-center mb-15">
						<div style={{
							backgroundImage: 'url(/img/sneakers/1.jpg)'}} 
							className="cartItemImg">
						</div>
						<div className="mr-20 flex">
							<p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
							<span className="price-drawer-text">12 999 руб.</span>
						</div>
							<img className="remove-btn" src="/img/btn-remove.svg" alt="Remove" />
					</div>
				</div>
				<div className="cartTotalBlock">
				<ul className="mb-30">
					<li className="d-flex">
						<span>Итого:</span>
						<div></div>
						<p>21 498 руб.</p>
					</li>
					<li className="d-flex">
						<span>Налог:</span>
						<div></div>
						<p>1074 руб.</p>
					</li>
				</ul>
				<button className="greenButton">Оформить заказ<img src="img/arrow.svg" alt="Arrow" /></button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;