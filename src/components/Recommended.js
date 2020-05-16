import React from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

import Rating from './Rating';

const MainContainer = styled.main`
  padding: 50px;
  .background-img {
    .recommended-data {
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
      .sinopsis {
        width: 50%;
      }
      button {
        width: 175px;
        height: 45px;
        color: #fff;
        background-color: #202124;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const Main = ({results, genres}) => {

console.log(results)

  return (

    <MainContainer>

    {results && (
    
      <div className='background-img'>
        <img src={'https://image.tmdb.org/t/p/w500'+ results.backdrop_path} alt={results.title} />
        <div className='recommended-data'>
          <h2>{results.title}</h2>

          <Rating ratingInfo={results.vote_average} />

            <div className='movie-info'>
              <p>DURACION</p>

              <p>{results.genre_ids.join(', ')}</p>
              
              <p>{results.release_date.split("-", 1)}</p>
              <p>AAAA</p>
              <p>Clasificacion</p>
            </div>
          </div>
          <div className='sinopsis'>
            <p>{results.overview}</p>
          </div>
          <button type='button'>
            <div>ICONO</div>
            <h4>ver Trailer</h4>
          </button>
        </div>
    )}

</MainContainer>

  );
}

export default Main;
