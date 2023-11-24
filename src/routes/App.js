import '../css/App.css';
import '../css/Appi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../layout/Navbar';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Contacto from '../pages/Contacto';
import Catalogo from '../pages/Catalogo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Nosotros' element={<Nosotros/>}></Route>
          <Route path='/Contacto' element={<Contacto/>}></Route>
          <Route path='/Contalogo' element={<Catalogo/>}></Route>
          <Route path="/signin" element={Signin} />
          <Route path="/signup" element={Signup} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
