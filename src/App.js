import './App.css';
import Header from './Main/Header';
import TopBar from './Main/TopBar';
import Footer from './Main/Footer';
import Home from './pages/Home';
import ShopList from './pages/ShopList';
import Cart from './pages/Cart';
import { Routes, Route } from "react-router-dom";
import WishList from './pages/WishList';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoplist" element={<ShopList />} />
        <Route path="/shoplist/:categoryId" element={<ShopList />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/checkout' element={<CheckOut/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
