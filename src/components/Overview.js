import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import useFetch from '../hooks/useFetchData';

import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import OnScope from './OnScope';
import OverviewVideos from './OverviewVideos';
import OverviewSimilar from './OverviewSimilar';

const Overview = () => {

  const params = useParams();

  const onScopeData = useFetch(`https://api.themoviedb.org/3/${params.categoria}/${params.id}?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);

  // const backdrop = onScopeData.backdrop_path;
  // const genres = onScopeData.genres;
  return (
    <Router>
      <OnScope resultsOverview={onScopeData} genres={onScopeData.genres} />

      <nav>
      <Link to='/'><h3>INFO</h3></Link>
      <Link to='/videos'><h3>VIDEOS</h3></Link>
      <Link to='/similar'><h3>SIMILARES</h3></Link>
      </nav>
      
  

      <Switch>
        <Route exact path='/' component={Overview}></Route>
        <Route path='/videos' component={OverviewVideos}></Route>
        <Route path='/similar' component={OverviewSimilar}></Route>
      </Switch>
    </Router>
  );
}

export default Overview;

// En esta pantalla vamos a ver los detalles de la película en la que hicimos click. El layout tiene dos secciones:
// - Una sección donde vemos la información general de la película (título, rating, cantidad de reviews, año de estreno, duración y la descripción).
// - Otra sección donde vamos a tener 3 tabs: 1) Información; 2) Videos; 3) Similares

// La solapa información va a tener la imagen de la película, y una lista de características de la misma (esta información sale del mismo resultado de la API). 
// Además deberá mostrar un listado de íconos con links externos (imdb, facebook, web site, etc), y el listado del cast.

// APIs: 
// - Detalle: https://developers.themoviedb.org/3/movies/get-movie-details
// - Links externos: https://developers.themoviedb.org/3/movies/get-movie-external-ids
// - Cast: https://developers.themoviedb.org/3/movies/get-movie-credits 

// La solapa Videos va a mostrar una lista de vídeos que salen directamente de la API: https://developers.themoviedb.org/3/movies/get-movie-videos 

// La solapa Similares va a mostrar, en el mismo formato que el listado de películas antes planteado, una lista de las películas relacionadas a la que estamos viendo actualmente. Las mismas salen del endpoint https://developers.themoviedb.org/3/movies/get-movie-recommendations 
