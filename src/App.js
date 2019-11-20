import React,{Fragment,useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import Top from './Components/Header/Top';
import Login from './Components/InicioSesion/Login';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Profile from './Components/Profile/Profile';
import {UserContext} from './Providers/UserProvider'
import Carrito from './Carrito';
import Filtro from './Components/BusquedaAutos';
import AutoDetail from './Components/Autos/AutoDetail';
import NotFound from './pages/404';
import Registro from './Components/Registro';

function App() {

  const user = useContext(UserContext);

  return (
    <Fragment>
      <Top  user={user}></Top>
       
       <Router>
        <Content user={user} path="/" ></Content> 
        <Login   path="/login"></Login>
        <Profile user={user} path="/profile/:uid" ></Profile>
        <Carrito user={user} path="/carrito" ></Carrito>
        <Filtro  path="/autos" ></Filtro>
        <AutoDetail path="/autos/:uid" user={user}></AutoDetail>
        <Registro user={user} path="/te-compramos-tu-carro"></Registro>
        <NotFound default></NotFound>
       </Router>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
