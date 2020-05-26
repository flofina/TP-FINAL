import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Card from './Card.js';

import { ArrowRight } from "@styled-icons/feather/ArrowRight";

export const ArrowIcon = styled(ArrowRight)`
color: #2196f3;
width: 30px;
height: 30px;
padding: 10px;
`

const Data = styled.section`
  padding: 30px 50px 80px 50px;
  background-color: #23272a;
  height: 550px;
  overflow: hidden;
 .encabezado {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    h3 {
      font-size: 32px;
      font-weight: 300;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DataContainer = ({results, titulo, categoria, tipo}) => {
  
  const cardData = results;

  return (
    <>
      { results && (
        <Data>
          <div className='encabezado'>
            <h3>{titulo}</h3>
            <div className='icon'><Link to={categoria + '/' + tipo}><ArrowIcon /></Link></div>
          </div>
          <div className='cards'>
            
            {cardData.map(cardInfo => (
              <Link to='/overview'><Card key={cardInfo.id} info={cardInfo} /></Link>
            ))}
            
          </div>
        </Data>  
      )}
    </>
  );
}

export default DataContainer;
