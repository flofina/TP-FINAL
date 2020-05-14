import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.article`
  .card-img {
    width: 265px;
    height: 400px;
    margin: 0px 4px;
    border: 1px solid white;
  }
  .card-title {
    h3 {
      font-weight: 300;
    }
    .stars {
    }
  }
`;

const Card = (props) => {

  console.log(props.results);

  return (
    <CardContainer>
      <div className='card-img'>CARD</div>
      <div className='card-title'>
        <h3>{props.results}</h3>
        <div className='stars'>ESTRELLAS</div>
        </div>
    </CardContainer>
  );
}

export default Card;
