import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Favourites from './components/Favourites';
import Addproduct from './components/Addproduct';
import Details from './components/Details';

function App() {
  return (
    <div>
    <Router>
      <Navbar></Navbar>
    
    <Routes>
      <Route path='/' element={<Products></Products>}></Route>
      <Route path='/details' element={<Details></Details>}></Route>
      <Route path='des/:id' element={<Favourites></Favourites>}></Route>
      <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>


    </Routes>
    </Router>
    </div>
  );
}

export default App;
