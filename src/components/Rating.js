import React from 'react';
import styled from 'styled-components';

import { Star } from '@styled-icons/material/Star';
import { StarHalf } from '@styled-icons/material/StarHalf';
import { StarBorder } from '@styled-icons/material/StarBorder';

export const StarIcon = styled(Star)`
color: #2196f3;
width: 20px;
height: 20px;
padding: 2px;
`

export const StarHalfIcon = styled(StarHalf)`
color: #2196f3;
width: 20px;
height: 20px;
padding: 2px;
`

export const StarBorderIcon = styled(StarBorder)`
color: #2196f3;
width: 20px;
height: 20px;
padding: 2px;
`

const StarsContainer = styled.div`
`

const Rating = ({ratingInfo}) => {

    return (
      <StarsContainer>       
        <div className='rating'>
          <div className='stars'>
            <p>{ratingInfo > 0 && ratingInfo <= 1.5 ? <><StarHalfIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></> : ''}</p>        
            <p>{ratingInfo > 1.5 && ratingInfo <= 2 ? <><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></> : ''}</p>
            <p>{ratingInfo > 2 && ratingInfo <= 3.5 ? <><StarIcon /><StarHalfIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></> : ''}</p>
            <p>{ratingInfo > 3.5 && ratingInfo <= 4 ? <><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></> : ''}</p>
            <p>{ratingInfo > 4 && ratingInfo <= 5.5 ? <><StarIcon /><StarIcon /><StarHalfIcon /><StarBorderIcon /><StarBorderIcon /></> : ''}</p>
            <p>{ratingInfo > 5.5 && ratingInfo <= 6 ? <><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></> : ''}</p>
            <p>{ratingInfo > 6 && ratingInfo <= 7.5 ? <><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /><StarBorderIcon /></> : ''}</p>
            <p>{ratingInfo > 7.5 && ratingInfo <= 8 ? <><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></> : ''}</p>
            <p>{ratingInfo > 8 && ratingInfo <= 9.5 ? <><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></> : ''}</p>
            <p>{ratingInfo > 9.5 && ratingInfo <= 10 ? <><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></> : ''}</p>
          </div>
          <div className='rating-info'>
            <p>{ratingInfo}</p>
          </div>
        </div>          

      </StarsContainer>
    );
  }
  
  export default Rating;
  