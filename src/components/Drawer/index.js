import React from 'react';
import styles from './Drawer.module.scss'

function Drawer() {
	return(
		<div style={{ display: 'none' }} className={styles.overlay}>
			<div className={styles.drawerBlock}>
				<div className={styles.headline}>
					<h2 className="mb-30">Корзина <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove" /></h2>
				</div>
				<div className={styles.items}>
					<div className={styles.cartItem}>
						<div style={{
							backgroundImage: 'url(/img/sneakers/1.jpg)'}} 
							className={styles.cartItemImg}>
						</div>
						<div className="mr-20 flex">
							<p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
							<span className={styles.priceDrawerText}>12 999 руб.</span>
						</div>
							<img className={styles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
					</div>
				</div>
				<div className={styles.cartTotalBlock}>
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
				<button className={styles.greenButton}>Оформить заказ<img src="img/arrow.svg" alt="Arrow" /></button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;