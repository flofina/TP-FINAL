import React from 'react';
import styled from "styled-components";

import home from '../assets/icons/home.svg';
import movie from '../assets/icons/movie.svg';
import tv from '../assets/icons/tv.svg';
import search from '../assets/icons/search.svg';

const NavContainer = styled.nav`
 background-color: #23272a;
 height: 40px;
 width: screen;
 padding: 10px 10px;
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;
  .menu-icons, .search-bar {
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .icon {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        padding: 15px;
      }  
    }    
  } 
  .search-bar {
    width: 300px;
    form {
      width: 300px;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      input {
        padding: 0px 10px 5px 10px;
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
  return (
    <NavContainer>
      <div className='menu-icons'>
        <div className='icon'><img src={home} alt='home' className='nav-icon'/></div>
        <div className='icon'><img src={movie} alt='movies' className='nav-icon'/></div>
        <div className='icon'><img src={tv} alt='tv shows' className='nav-icon'/></div>
      </div>
      <div className='search-bar'>
        <form>
          <div className='icon'><img src={search} alt='busqueda' className='nav-icon'/></div>
          <input type='text' name='search' placeholder='Búsqueda...' />
        </form>
      </div>
    </NavContainer>
  );
}

export default Nav;
