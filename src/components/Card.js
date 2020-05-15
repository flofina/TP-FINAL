import React, { useState } from 'react';
import styled from 'styled-components';

import { Star } from "@styled-icons/material/Star";
import { StarHalf } from "@styled-icons/material/StarHalf";

export const StarIcon = styled(Star)`
color: #2196f3;
width: 20px;
height: 20px;
padding: 5px;
`

export const StarHalfIcon = styled(StarHalf)`
color: #2196f3;
width: 20px;
height: 20px;
padding: 5px;
`

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
    .stars {
      margin: 15px 0px;
    }
    h3 {
      font-weight: 200;
      width: 265px;
      margin-top: 10px;
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
        <div className='stars'><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
        <h3>{info.title}{info.name}</h3>
      </div>
    </CardContainer>
  );
}

export default Card;
