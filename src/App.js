import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const arr = [
	{title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999', imageUrl: "/img/sneakers/1.jpg"},
	{title: 'Мужские Кроссовки Nike Air Max 270', price: '12 699', imageUrl: "/img/sneakers/2.jpg"},
	{title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499', imageUrl: "/img/sneakers/3.jpg"},
	{title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999', imageUrl: "/img/sneakers/4.jpg"},
	{title: 'Мужские Кроссовки Under Armour Curry 8', price: '15 199', imageUrl: "/img/sneakers/5.jpg"},
	{title: 'Мужские Кроссовки Nike Kyrie 7', price: '11 299', imageUrl: "/img/sneakers/6.jpg"},
	{title: 'Мужские Кроссовки Jordan Air Jordan 11', price: '10 799', imageUrl: "/img/sneakers/7.jpg"},
	{title: 'Мужские Кроссовки Nike LeBron XVIII', price: '16 499', imageUrl: "/img/sneakers/8.jpg"}
];

function App() {
  return (
    <div className="wrapper clear">
			<Drawer/>
			<Header/>
			<div className="content p-40">
				<div className="d-flex align-center justify-between mb-30">
					<h1>Все кроссовки</h1>
					<div className="search-block d-flex">
						<img src="/img/search.svg" alt="some-text" />
						<input placeholder="Поиск ..."/>
					</div>
				</div>
				<div className="flex-wrap d-flex">
					{arr.map((obj) => (
						<Card 
							title={obj.title}
							price={obj.price}
							imageUrl={obj.imageUrl}
							onClick={() => console.log(obj)}
						/>
					))}
				</div>
			</div>
		</div>
  );
}

export default App;