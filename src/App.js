import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import TodoApp from './components/Todo/TodoApp';
import WeatherApp from './components/Weather/WeatherApp';
import Index from './pages/Index';
import Create from './pages/create';
import View from './pages/view';
import Store from './store/store';

function App() {
	return (
		<div className="App">
			{/* <TodoApp />
			<WeatherApp /> */}
			<Store>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="create" element={<Create />} />
						<Route path="view/:bookId" element={<View />} />
					</Routes>
				</BrowserRouter>
			</Store>						
		</div>
	);
}

export default App;
