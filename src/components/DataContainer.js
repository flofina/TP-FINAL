import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Card from './Card';

import { ArrowRight } from '@styled-icons/feather/ArrowRight';

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

const DataContainer = ({resultsTrending, resultsMovie, resultsSerie, categoria, tipo, tiempo, titulo} ) => {
  
  const cardDataTrending = resultsTrending;
  const cardDataMovie = resultsMovie;
  const cardDataSerie = resultsSerie;

  return (
    <>
      { resultsTrending && tiempo && (
        <Data>
          <div className='encabezado'>
            <h3>{titulo}</h3>
            <div className='icon'><Link to={categoria + '/' + tipo + '/' + tiempo}><ArrowIcon /></Link></div>
          </div>
          <div className='cards'>
            {cardDataTrending.map(cardInfo => (
              <Card key={cardInfo.id} info={cardInfo} mediaType={cardInfo.media_type}/>
            ))}
          </div>
        </Data>           
      )}

      { resultsMovie && (
        <Data>
          <div className='encabezado'>
            <h3>{titulo}</h3>
            <div className='icon'><Link to={categoria + '/' + tipo}><ArrowIcon /></Link></div>
          </div>
          <div className='cards'>
            {cardDataMovie.map(cardInfo => (
              <Card key={cardInfo.id} info={cardInfo} mediaType={categoria}/>
            ))}
          </div>
        </Data> 
      )}

      { resultsSerie && (
        <Data>
          <div className='encabezado'>
            <h3>{titulo}</h3>
            <div className='icon'><Link to={categoria + '/' + tipo}><ArrowIcon /></Link></div>
          </div>
          <div className='cards'>
            {cardDataSerie.map(cardInfo => (
              <Card key={cardInfo.id} info={cardInfo} mediaType={categoria}/>
            ))}
          </div>
        </Data>           
      )}
    </>
  );
}

export default DataContainer;
