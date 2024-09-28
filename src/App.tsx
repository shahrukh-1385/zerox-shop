import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Navbar from './components/navbar/Navbar';
import Shopping from './pages/shopping/Shopping';
import Login from './pages/login/Login';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Store' element={<Store />} />
        <Route path='/Shopping' element={<Shopping />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
