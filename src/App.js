import React from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';
import Footer from './components/Footer';

const Body = styled.div`
  color: #fff;
  background-color: #141414;
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
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
