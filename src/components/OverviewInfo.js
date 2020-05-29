import React from 'react';

import styled from 'styled-components';

import { FacebookSquare } from '@styled-icons/fa-brands/FacebookSquare';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import { Instagram } from '@styled-icons/fa-brands/Instagram';
import { Link } from '@styled-icons/feather/Link';
import { Imdb } from '@styled-icons/fa-brands/Imdb';

import Card from './Card';

export const FacebookIcon = styled(FacebookSquare)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`
export const TwitterIcon = styled(Twitter)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const InstagramIcon = styled(Instagram)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const ImdbIcon = styled(Imdb)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
`

export const LinkIcon = styled(Link)`
color: #dcddde;
width: 25px;
height: 25px;
padding: 10px;
margin-bottom: 30px;
`

const OverviewContainer = styled.section`
  margin: 0px 100px 0px 100px;
  padding: 40px;
  display: flex;
  flex-direction:row;
  justify-content: center;
 .poster-container {
    margin: 40px;
 }
 .overview-info {
    margin: 60px 0px 0px 60px;
    display: flex;
    flex-direction: column;
    h3 {
      font-weight: 400;
    }
 }
 table {
   font-size: 18px;
   border-spacing: 0px 10px;
   color: #dcddde;
   th {
     column-width: 120px;
   }
   .td-row {
     display: flex;
     flex-direction: row;
     p {
       margin: 0px 10px 0px 0px;
     }
   }
 }
`

const RRSS = styled.section`
margin-top: 10px;
display: flex;
justify-content: center;
`

const Cast = styled.section`
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

const OverviewInfo = ({data, cast, external}) => {

  const genres = data.genres;
  const languages = data.spoken_languages;
  const companies = data.production_companies;
  const castData = cast;

  return (
    <>
      {data && external && (
        <OverviewContainer>
          <div className='poster-container'>
            <img src={'https:image.tmdb.org/t/p/w500'+ data.poster_path} alt={data.title} />
            
            <RRSS>
              <a href={'https://www.facebook.com/' + external.facebook_id}><FacebookIcon /></a>
              <a href={'https://twitter.com/' + external.facebook_id}><TwitterIcon /></a>
              <a href={'https://www.instagram.com/' + external.facebook_id}><InstagramIcon /></a>
              <a href={'https://www.imdb.com/title/' + external.imdb_id}><ImdbIcon /></a>
              <a href={data.homepage}><LinkIcon /></a>
            </RRSS>
          </div>

          <div className='overview-info'>
            <div>
              <h2>Storyline</h2>
              <h3>{data.overview}</h3>
            </div>
            
            <div className='table'>
              <table>
                <th scope='row'></th>
                  <tr>
                    <td>Released</td>
                    <td>{data.release_date}</td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td>{data.runtime} min</td>
                  </tr>
                  <tr>
                    <td>Genre</td>
                    <td className='td-row'>
                      {genres && (
                        genres.map(genre => (
                        <p key={genre.id}>{genre.name}</p>))
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td className='td-row'>
                      {languages && (
                        languages.map(language => (
                        <p key={language.iso_639_1}>{language.name}</p>))
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Production</td>
                    <td className='td-column'>
                      {companies && (
                        companies.map(company => (
                        <p key={company.id}>{company.name}</p>))
                      )}
                    </td>
                  </tr>
                  <tr>
                  <td>Budget</td>
                  <td>USD {data.budget}</td>
                  </tr>
              </table>
            </div>
          </div>
        </OverviewContainer>
      )}
     
      {cast && (
        <Cast>
        <div className='encabezado'>
          <h3>Casting</h3>
        </div>
        <div className='cards'>
          {castData.map(castInfo => (
            <Card key={castInfo.cast_id} cast={castInfo}/>
          ))}
        </div>
      </Cast>
      )}
    </>
  );
}

export default OverviewInfo;
