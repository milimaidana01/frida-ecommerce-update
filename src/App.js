import './App.css';
import Home from './views/Home';
import Products from './views/Products';
import Cart from './views/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={ <Home/> }/>
          <Route path="/products" element={ <Products/> }/>
          <Route path="/cart" element={ <Cart/> }/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
