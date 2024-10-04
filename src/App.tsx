import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import ProductPage from './pages/product/productPage/ProductPage';
import ShoppingPage from './pages/shopping/ShoppingPage';
import Footer from './components/footer/Footer';
import { ShoppingCardItem } from './context/ShoppingContext/ShoppingContext';
import Singin from './pages/singin/Singin';
import PageError from './pages/pageError/PageError';
function App() {
	return (
		<ShoppingCardItem>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Store' element={<Store />} />
				<Route path='/shoppingPage' element={<ShoppingPage />} />
				<Route path='/Login' element={<Login />} />
				<Route path='/Singin' element={<Singin />} />
				<Route path='/ProductPage/:id' element={<ProductPage />} />
				<Route path='*' element={<PageError />} />
			</Routes>
			<Footer />
		</ShoppingCardItem>
	);
};
export default App;
