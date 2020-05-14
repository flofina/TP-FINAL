import React from 'react';
import styled from 'styled-components';

import Card from './Card.js'

const DataContainer = styled.section`
  padding: 50px;
  background-color: #23272a;
 .encabezado {
    display: flex;
    flex-direction: row;
    align-items: center;
    h3 {
      font-size: 32px;
      font-weight: 300;
    }
  }
  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Data = ({results}) => {

  console.log(results)

  const cardData = results;

  return (
    <DataContainer>
      <div className='encabezado'>
        <h3>Películas o series que son tendencia</h3>
        <p>FLECHA</p>
      </div>
      <div className='cards'>
        {/* aca tengo que hacer el mapeo */}
        <Card infoCard={cardData}/>
        
      </div>
    </DataContainer>
  );
}

export default Data;
