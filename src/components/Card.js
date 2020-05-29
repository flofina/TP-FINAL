import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Rating from './Rating';

const CardContainer = styled.article`
  margin-bottom: 20px;
  .card-img {
    width: 265px;
    height: 400px;
    margin: 0px 4px;
    overflow : hidden;
    img {
      width: 100%;
      height: 100%;
      transform: scale(1);
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
    img:hover {
      width: 102%;
      height: 102%;
      transition: all 0.3s ease-in-out;
    }
  }
  .card-title {
    .rating {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 50px;
      .stars {
      margin: 0px 15px 0px 0px;
      }
    }
    h3 {
      width: 265px;
      height: 80px;
      color: #fff;
      font-weight: 300;
      margin: 10px;
    }
    h4 {
      color: #dcddde;
      font-weight: 200;
      margin: 10px;
    }
    .cast-info{
      height: 20px;
    }
  }
  .video-img {
    width: 320px;
    height: auto;
  }
  .video-title {
    h3 {
      color: #fff;
      font-weight: 300;
      margin: 10px;
      width: 320px;
    }
    h4 {
      color: #dcddde;
      font-weight: 200;
      margin: 10px;
      width: 100px;
    }
  }
`;

const Card = ({info, mediaType, mediaTypeMovie, mediaTypeSerie, cast, video, related}) => {

  return (
    <>
    {info && (
      <CardContainer>
        <Link to={('/' + mediaType + '/' + info.id) || (mediaTypeMovie + '/' + info.id) || (mediaTypeSerie + '/' + info.id) } key={info.id}>
          <div className='card-img'>
            <img src={'https://image.tmdb.org/t/p/w500'+ info.poster_path} alt={info.title} />
          </div>
          <div className='card-title'>
            <Rating ratingInfo={info.vote_average} />
            <h3>{info.title}{info.name}</h3>
          </div>
        </Link>
      </CardContainer>
    )}

    {cast && (
      <CardContainer>
          <div className='card-img'>
            <img src={'https://image.tmdb.org/t/p/w500'+ cast.profile_path} alt={cast.name} />
          </div>
          <div className='card-title'>
            <h3 className='cast-info'>{cast.name}</h3>
            <h4 className='cast-info'>{cast.character}</h4>
          </div>
      </CardContainer>
    )}

    {video && (
      <CardContainer>
          <div className='video-img'>
          <a href={'https://www.youtube.com/watch?v='+ video.key}><img src={'https://img.youtube.com/vi/' + video.key + '/mqdefault.jpg'} alt={video.name} /></a>
          </div>
          <div className='video-title'>
            <h3>{video.name}</h3>
            <h4>{video.type}</h4>
          </div>
      </CardContainer>
    )}

    {related && (
      <CardContainer>
        <Link to={('/' + mediaType + '/' + related.id) } key={related.id}>
          <div className='card-img'>
            <img src={'https://image.tmdb.org/t/p/w500'+ related.poster_path} alt={related.title} />
          </div>
          <div className='card-title'>
            <Rating ratingInfo={related.vote_average} />
            <h3>{related.title}{related.name}</h3>
          </div>
        </Link>
      </CardContainer>
    )}
  </>
  );
}

export default Card;
