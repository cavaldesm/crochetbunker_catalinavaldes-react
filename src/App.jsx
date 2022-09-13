import React from 'react';
import './App.css';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import './index.css';

export const CartContext = React.createContext([]);
console.log('CartContext: ', CartContext);

function App() {
  return (
    <> 
    <BrowserRouter>
  
     <CartProvider>  
      <Header>

      </Header>
      <NavBar />
     <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/detalle/:detalleId" element={<ItemDetailContainer /> } />
     </Routes>
     </CartProvider>
    </BrowserRouter>    
    
    <Footer>  
    </Footer>
    </>



  );
}

export default App;
