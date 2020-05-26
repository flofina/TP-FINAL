import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import useFetch from '../hooks/useFetch'; 
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import DataContainer from './DataContainer';

import Card from './Card';

const Data = styled.section`
  padding: 30px 50px 80px 50px;
  background-color: #23272a;
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

const VerMas = () => {

  let titulo = '';

  const params = useParams();
console.log(params)
  if (params.categoria === 'trending' && params.tipo === 'movie') {
    titulo = 'Películas que son tendencia';
    params.tipo = 'movie/week';
  } else if (params.categoria === 'trending' && params.tipo === 'tv') {
    titulo = 'Series que son tendencia';
    params.tipo = 'tv/week';
  }; 

  if (params.categoria === 'movie' && params.tipo === 'popular') {
    titulo = 'Películas populares';
  } else if (params.categoria === 'movie' && params.tipo === 'top_rated') {
    titulo = 'Películas con mejores críticas';
  } else if (params.categoria === 'movie' && params.tipo === 'upcoming') {
    titulo = 'Películas a estrenarse';
  } else if (params.categoria === 'movie' && params.tipo === 'now_playing') {
    titulo = 'Películas en cines';
  };

  if (params.categoria === 'tv' && params.tipo === 'popular') {
    titulo = 'Series populares';
  } else if (params.categoria === 'tv' && params.tipo === 'top_rated') {
    titulo = 'Series con mejores críticas';
  } else if (params.categoria === 'tv' && params.tipo === 'on_the_air') {
    titulo = 'Series al aire';
  };

  const verMasData = useFetch(`https://api.themoviedb.org/3/${params.categoria}/${params.tipo}?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);

  console.log(verMasData)
  
  return (
    <>
      <Data>
        <div className='encabezado'>
          <h3>{titulo}</h3>
          <div className='icon'></div>
        </div>
        <div className='cards'>
           {verMasData.map(cardInfo => (
          <Link to={params.categoria + '/' + params.tipo}><Card key={cardInfo.id} info={cardInfo} /></Link>
          ))}
        </div>
      </Data>
    </>
  );
}

export default VerMas;
