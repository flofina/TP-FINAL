import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Homepage from './Home';
import Peliculas from './Peliculas';
import Series from './Series';
import VerMas from './VerMas';
import Overview from './Overview';

import styled from 'styled-components';

import { Home } from '@styled-icons/feather/Home';
import { Video } from '@styled-icons/feather/Video';
import { Tv } from '@styled-icons/feather/Tv';
import { Search } from '@styled-icons/feather/Search';

// atencion al tabulado aqui, el css deberia estar un tabulado despues que la declaracion de HomeIcon, VideoIcon, etc. 
export const HomeIcon = styled(Home)`
color: #dcddde;
width: 30px;
height: 30px;
padding: 10px;
:hover {
  color: #2196f3;
}
`

export const VideoIcon = styled(Video)`
color: #dcddde;
width: 34px;
height: 34px;
padding: 10px;
margin-top: 5px;
:hover {
  color: #2196f3;
}
`

export const TvIcon = styled(Tv)`
color: #dcddde;
width: 30px;
height: 30px;
padding: 10px;
:hover {
  color: #2196f3;
}
`

export const SearchIcon = styled(Search)`
color: #dcddde;
width: 28px;
height: 28px;
padding: 10px;
margin-top: 5px;
:hover {
  color: #2196f3;
}
`

const NavContainer = styled.nav`
 background-color: #23272a;
 height: 40px;
 width: screen;
 padding: 10px 40px;
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;
  .menu-icons, .search-bar {
    width: 170px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .search-bar {
    width: 300px;
    margin-left: 30px;
    form {
      width: 300px;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      input {
        padding: 10px 10px 5px 10px;
        width: 250px;
        height: 25px;
        background-color: transparent;
        border: none;
        font-size: 20px;
        color: #dcddde;
        vertical-align: center;
      }
    }
  }
`;

const Nav = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleChange = e => {
    setBusqueda(e.target.value); 
  }

  // Tu busqueda anda mal (se envia al hacer enter) porque el handleSubmit esta en el input cuando tendria que estar
  // en la etiqueta form 
  // <form onSubmit={handleSubmit}>
  // Un segundo problema es que no podemos usar useHistory y history.push en este componente, porque el Router esta aca 
  // (no podemos usar useHistory antes de que exista el router). Una solucion seria mover el Router a <App>, 
  // aunque entiendo que implicaria mover el Footer. 
  // Una vez hecho eso, podemos importar useHistory, declarar la variable history, y una vez hecho eso, 
  // en la funcion handleSubmit, escribir: 
  // const handleSubmit = e => {
  //   e.preventDefault();
  //  history.push('/search$q=' + busqueda)
  // }
  // para que el usuario pueda buscar usando enter, que es el comportamiento mas habitual. 

  return (
    <Router>
      <NavContainer>
        <div className='menu-icons'>
          <Link to='/'><div className='icon'><HomeIcon /></div></Link>
          <Link to='/movies'><div className='icon'><VideoIcon /></div></Link>
          <Link to='/tvshows'><div className='icon'><TvIcon /></div></Link>
        </div>
        <div className='search-bar'>
          <form>
          <Link to={'/search$q=' + busqueda}><div className='icon'><SearchIcon/></div></Link>
            <input type='text' name='search' placeholder='Búsqueda...' 
            value={busqueda} 
            onChange={handleChange} 
            onSubmit={handleSubmit}
            />
          </form>
        </div>
      </NavContainer>

      {/* Como comente mas arriba, seria ideal que este router este en App asi 
      podemos usar history.push aqui */}
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/movies' component={Peliculas}></Route>
        <Route path='/tvshows' component={Series}></Route>
        <Route path='/search$q=:value' component={VerMas}></Route>
        <Route path='/:categoria/:tipo' component={VerMas}></Route>
        <Route path='/:categoria/:id' component={Overview}></Route>
      </Switch>
    </Router>
  );
}

export default Nav;
