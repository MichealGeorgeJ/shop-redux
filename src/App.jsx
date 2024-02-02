import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;