import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetchData';

import styled from 'styled-components';

import OnScope from './OnScope';
import OverviewInfo from './OverviewInfo';
import OverviewVideos from './OverviewVideos';
import OverviewRelated from './OverviewRelated';

const NavContainer = styled.nav`
 height: 80px;
 display: flex;
 justify-content: center;
 .button-container {
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 }
`
 
const Button = styled.button`
height: 50px;
padding: 10px 30px;
color: #fff;
background-color: #141414;
font-size: 24px;
font-weight: bold;
border: none;
appearance: none;
text-rendering: none;
outline: none;
cursor: pointer;
:hover {
  background-color: #000;
  border-radius: 5px;
}
:focus {
  background-color: #000;
  border-radius: 5px;
}
`

const Overview = () => {

  const params = useParams();

  const onScopeData = useFetch(`https://api.themoviedb.org/3/${params.categoria}/${params.id}?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);
  const onScopeExternal = useFetch(`https://api.themoviedb.org/3/${params.categoria}/${params.id}/external_ids?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);
  const onScopeCredits = useFetch(`https://api.themoviedb.org/3/${params.categoria}/${params.id}/credits?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);
  const onScopeVideos = useFetch(`https://api.themoviedb.org/3/${params.categoria}/${params.id}/videos?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);
  const onScopeRelated = useFetch(`https://api.themoviedb.org/3/${params.categoria}/${params.id}/recommendations?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);

  const [page, setPage] = useState('');
  
  const handleClick = e => {
    setPage((e.target.id));
  };

  const paginacion = {
    info: <OverviewInfo data={onScopeData} cast={onScopeCredits.cast} external={onScopeExternal} />,
    videos: <OverviewVideos videos={onScopeVideos} />,
    related: <OverviewRelated related={onScopeRelated} mediaType={params.categoria} />,
  }  

  return (
    <>
      <OnScope resultsOverview={onScopeData} trailer={onScopeVideos} id={onScopeData.id} mediaType={params.categoria}/>
      
      <NavContainer>
        <div className='button-container'>
          <Button id='info' onClick={handleClick}>INFO</Button>
          <Button id='videos' onClick={handleClick}>VIDEOS</Button>
          <Button id='related' onClick={handleClick}>RELATED</Button>
        </div>
      </NavContainer>

      {!page &&
      <OverviewInfo data={onScopeData} cast={onScopeCredits.cast} external={onScopeExternal} />
      }
            
      {
        paginacion[page]
      }
    </>
  );
}

export default Overview;
