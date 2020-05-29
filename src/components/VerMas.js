import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import useFetch from '../hooks/useFetch'; 
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import Card from './Card';
import Overview from './Overview';

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
    justify-content: space-around;
  }
  .pagination {
    display: flex;
    justify-content: center;
  }
`;

const PaginationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .pagination {
    width: 450px;
    height: 45px;
    background: #141414;
    border-radius: 5px;
  }
`;

const Button = styled.button`
margin: 0px 5px;
padding: 5px 20px;
color: #fff;
background-color: #141414;
font-size: 20px;
font-weight: bold;
border: none;
appearance: none;
text-rendering: none;
outline: none;
cursor: pointer;
:hover {
  background-color: #000;
  border-radius: 5px;
}
:focus {
  background-color: #000;
  border-radius: 5px;
}
`

const VerMas = () => {

  let titulo = '';
  
  const params = useParams();

  if (params.categoria === 'trending' && params.tipo === 'movie') {
    params.tipo = 'movie/week';
  } else if (params.categoria === 'trending' && params.tipo === 'tv') {
    params.tipo = 'tv/week';
  }; 

  if (params.categoria === 'trending' && params.tipo === 'movie/week') {
    titulo = 'Películas que son tendencia';
  } else if (params.categoria === 'trending' && params.tipo === 'tv/week') {
    titulo = 'Series que son tendencia';
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
  } else if (params.categoria === 'tv' && params.tipo === 'airing_today') {
    titulo = 'Series actuales';
  };
  
  if (params.categoria === undefined && params.tipo === undefined) {
    params.categoria = 'search';
    params.tipo = 'multi';
  };

  const verMasData = useFetch(`https://api.themoviedb.org/3/${params.categoria}/${params.tipo}?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4${'&query=' + params.value}`);

  return (
    <>
      {verMasData && (
        <Data>
          <div className='encabezado'>
            <h3>{titulo}</h3>
          </div>
          <div className='cards'>
            {verMasData.map(cardInfo => (
              <Card key={cardInfo.id} info={cardInfo} mediaType={ cardInfo.media_type || params.categoria }/>
            ))}
          </div>
          
          <PaginationContainer>
            <div className='pagination'>
            <Button id='first'>{'<'}</Button>
            <Button id='prev'>PREVIOUS</Button>
            <Button id='next'>NEXT</Button>
            <Button id='last'>{'>'}</Button>
            </div>
          </PaginationContainer>
        </Data>
      )}

      {!verMasData && (
        <Switch>
          <Route exact path='/:categoria/:id' component={Overview}></Route>
        </Switch>
      )}  
    </>
  );
}

export default VerMas;
