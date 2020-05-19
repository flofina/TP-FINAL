import React from 'react';
import styled from 'styled-components';

import Rating from './Rating';

import { Play } from "@styled-icons/feather/Play";

export const PlayIcon = styled(Play)`
color: #dcddde;
fill: #dcddde;
width: 20px;
height: 20px;
padding-right: 10px;
`

const MainContainer = styled.main`
background-color: #000;
height: 720px;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
  .recommended-data {
    padding: 50px 0px 50px 50px;
    margin-right: 2px;
    width: 70%;
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
    img {
      width: 1080px;
      height: 720px;
      position: relative;
      top: 2px;
    }
    .linear-gradient{
      width: 1080px;
      height: 720px;
      background-image: linear-gradient(to left,rgba(255,0,0,0),rgba(255,0,0,0),rgba(255,0,0,0),rgba(0,0,0,1)); 
      position: absolute;
      top: 60px;
    }
  }
`;

const Main = ({results, genres}) => {

  return (

    <MainContainer>

    {results && (
    <>
      <div className='recommended-data'>
        <h1>{results.title}</h1>
        <div className='movie-info'>
          <Rating ratingInfo={results.vote_average} />
          <div className='movie-attributes'>
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
        <PlayIcon />
        <h3>ver Trailer</h3>
      </button>
      </div>
      <div className='background-img'>
        <img src={'https://image.tmdb.org/t/p/original'+ results.backdrop_path} alt={results.title} />
        <div className='linear-gradient'></div>
      </div>
      </>
    )}

</MainContainer>

  );
}

export default Main;
