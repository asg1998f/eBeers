import './App.css';
import { ProductProvider } from './context/ProductContext/ProductState';
import { UserProvider } from './context/UserContext/UserState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';




function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <ProductProvider>
        <Header/>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer/>
      </ProductProvider>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
