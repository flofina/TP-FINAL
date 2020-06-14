import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import useFetch from '../hooks/useFetchData';

import styled from 'styled-components';

import Rating from './Rating';

import { Play } from '@styled-icons/feather/Play';

export const PlayIcon = styled(Play)`
color: #dcddde;
fill: #dcddde;
width: 20px;
height: 20px;
padding-right: 10px;
`

const MainContainer = styled.main`
background-color: #000;
height: 610px;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
  .on-scope-data {
    padding: 50px 0px 50px 50px;
    width: 50%;
    h1 {
      font-size: 36px;
      font-weight: 400;
    }
    .movie-info {
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      .rating {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .stars {
          padding-right: 10px;
        }
        .rating-info {
          display: flex;
          flex-direction: row;
          p {
            padding: 0px 5px;
          }
        }
      }
      .movie-attributes {
        color: #dcddde87;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        p {
          margin: 0px 5px;
        }
      }
    }
    .sinopsis {
      font-weight: 400;
      height: 100%;
    }
    button {
      margin: 30px 0px;
      width: 160px;
      height: 45px;
      color: #fff;
      background-color: #202124;
      border: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      h3 {
        letter-spacing: 1px;
        margin: 0px;
      }
    }  
  }
  .background-img {
    height: 610px;
    img {
      width: 1080px;
      height: 610px;
      position: relative;
      top: 0px;
      left: 0px;
    }
    .linear-gradient{
      width: 1080px;
      height: 610px;
      background-image: linear-gradient(to left,rgba(255,0,0,0),rgba(255,0,0,0),rgba(255,0,0,0),rgba(0,0,0,1)); 
      position: absolute;
      top: 60px;
    }
  }
`;

const Main = ({results, id, resultsOverview, mediaType}) => {

  const onScopeTrailer = useFetch(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);
  const trailerResults = onScopeTrailer.results;
  const trailerKey = trailerResults;

  // Fijate de tratar que tu componente se pueda adaptar tanto a results como a resultsOverview
  // para repetir menos codigo tan similar
  
  return (
    <MainContainer>
      {results && trailerKey && (
        <>
          <div className='on-scope-data'>
            <Link to={('movie/' + results.id)}>
              <h1>{results.title}</h1>
            </Link>
            <div className='movie-info'>
              <Rating ratingInfo={results.vote_average} />
              <div className='movie-attributes'>
                <p>{results.release_date.split('-', 1)}</p>
                </div>
            </div>
            <div className='sinopsis'>
              <p>{results.overview}</p>
            </div>
            <button type='button'>
            <PlayIcon />
              <a href={'https://www.youtube.com/watch?v=' + trailerKey[0].key}><h3>ver Trailer</h3></a>
          </button>
          </div>
          <div className='background-img'>
            <img src={'https://image.tmdb.org/t/p/original'+ results.backdrop_path} alt={results.title} />
            <div className='linear-gradient'></div>
          </div>
        </>
      )}

      {resultsOverview && trailerKey && (
        <>
          <div className='on-scope-data'>
          <h1>{resultsOverview.title || resultsOverview.name}</h1>
            <div className='movie-info'>
              <Rating ratingInfo={resultsOverview.vote_average} />
              <div className='movie-attributes'>
                <p>{resultsOverview.runtime} min</p>
              </div>
            </div>
            <div className='sinopsis'>
              <p>{resultsOverview.overview}</p>
            </div>
            <button type='button'>
            <PlayIcon />
            <a href={'https://www.youtube.com/watch?v=' + trailerKey[0].key}><h3>ver Trailer</h3></a>
          </button>
          </div>
          <div className='background-img'>
            <img src={'https://image.tmdb.org/t/p/original'+ resultsOverview.backdrop_path} alt={resultsOverview.title} />
            <div className='linear-gradient'></div>
          </div>
        </>
      )}
    </MainContainer>
  );
}

export default Main;
