function App() {
  return (
    <div className="wrapper clear">
			<header className="d-flex justify-between align-center p-40">
				<div className="d-flex align-center">
				<img width={40} height={40} src="/img/logo.png" alt="some-text" />
					<div>
						<h3 className="text-uppercase">React Sneakers</h3>
						<p className="opacity-5">Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="d-flex">
					<li className="mr-30">
						<img width={20} height={20} src="/img/cart.svg" alt="some-text" />
						<span><b>1205 руб.</b></span>
					</li>
					<li>
						<img width={20} height={20} src="/img/user.svg" alt="some-text" />
					</li>
				</ul>
			</header>
			<div className="content p-40">
				<h1 className="mb-30">Все кроссовки</h1>
					<div className="d-flex">
					<div className="card">
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
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/2.jpg" alt=""></img>
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
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/3.jpg" alt=""></img>
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
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/4.jpg" alt=""></img>
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
					</div>
			</div>
		</div>
  );
}

export default App;