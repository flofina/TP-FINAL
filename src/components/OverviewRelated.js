import React from 'react';

import styled from 'styled-components';

import Card from './Card';

const RelatedContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
`

const Related = styled.section`
  width: 100%;
  padding: 30px 50px 80px 50px;
  background-color: #23272a;
  overflow: hidden;
 .encabezado {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    h3 {
      font-size: 32px;
      font-weight: 300;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
`

const OverviewRelated = ({related, mediaType}) => {

  const overviewRelated = related.results;
  
  if (mediaType === 'tv') {
    mediaType = 'TV shows'
  } else if (mediaType === 'movie') {
    mediaType = 'movies'
  };

  return (
    <>
      <RelatedContainer>
        <Related>
          <div className='encabezado'>
            <h3>Related {mediaType}</h3>
          </div>

          {overviewRelated && (
            <div className='cards'>
              {overviewRelated.map(related => (
                <Card key={related.id} related={related} mediaType={mediaType}/>))}
            </div>    
          )}
        </Related>
      </RelatedContainer>
    </>
  );
}

export default OverviewRelated;
