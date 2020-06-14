import React from 'react';
import styled from 'styled-components';
// no estamos usando App.css ni index.css, asi que deberiamos borrarlo. 
import Nav from './components/Nav';
import Footer from './components/Footer';

const Body = styled.div`
  color: #fff;
  background-color: #141414;
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #dcddde;
  }
`;

const App = () => {
  return (
    <Body>
      <Nav />
      <Footer />
    </Body> 
  );
}
export default App;
