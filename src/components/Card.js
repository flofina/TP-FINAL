import React from 'react';
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
      font-weight: 200;
      width: 265px;
      height: 70px;
      margin: 10px 0px 0px 0px;
    }
  }
`;

const Card = ({info}) => {

  return (
    <CardContainer>
      <div className='card-img'>
        <img src={'https://image.tmdb.org/t/p/w500'+ info.poster_path} alt={info.title} />
      </div>
      <div className='card-title'>
        <Rating ratingInfo={info.vote_average} />
        <h3>{info.title}{info.name}</h3>
      </div>
    </CardContainer>
  );
}

export default Card;
