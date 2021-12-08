import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

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
				<div className="d-flex justify-between">
					<Card />
				</div>
			</div>
		</div>
  );
}

export default App;