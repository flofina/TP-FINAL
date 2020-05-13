import React from 'react';
import styled from 'styled-components';

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

const Main = () => {
  return (
    <MainContainer>
      <div className='background-img'>
        {/* <img src={} alt={} /> */}
        <div className='recommended-data'>
          <h2>Titulo</h2>
          <div className='rating'>
            <div className='stars'>ESTRELLAS</div>
            <div className='rating-info'>
              <p>XX Reviews</p>
              <p>Season XX</p>
              <p>AAAA</p>
              <p>Clasificacion</p>
            </div>
          </div>
          <div className='sinopsis'>
            <p>SINOPSIS</p>
          </div>
          <button type='button'>
            <div>ICONO</div>
            <h4>ver Trailer</h4>
          </button>
        </div>
      </div>
    </MainContainer>
  );
}

export default Main;
