import React from 'react';
import styled from "styled-components";

import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search"

export const HomeIcon = styled(Home)`
color: #dcddde;
width: 30px;
height: 30px;
padding: 10px;
`

export const VideoIcon = styled(Video)`
color: #dcddde;
width: 34px;
height: 34px;
padding: 10px;
margin-top: 5px;
`

export const TvIcon = styled(Tv)`
color: #dcddde;
width: 30px;
height: 30px;
padding: 10px;
`

export const SearchIcon = styled(Search)`
color: #dcddde;
width: 28px;
height: 28px;
padding: 10px;
margin-top: 5px;
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
  return (
    <NavContainer>
      <div className='menu-icons'>
        <div className='icon'><HomeIcon /></div>
        <div className='icon'><VideoIcon /></div>
        <div className='icon'><TvIcon /></div>
      </div>
      <div className='search-bar'>
        <form>
        <div className='icon'><SearchIcon /></div>
          <input type='text' name='search' placeholder='Búsqueda...' />
        </form>
      </div>
    </NavContainer>
  );
}

export default Nav;
