import React from 'react'
import Row from './Row'
import request from "./request";
function Main() {
  return (
    <div className='main'>
         <Row title="NETLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} isLargeRow = {true} />
      <Row title="HORROR " fetchUrl={request.fetchHorrorMovies} />
      <Row title="TOP RATED" fetchUrl={request.fetchTopReted} />
      <Row title="ACTION " fetchUrl={request.fetchActionMovies} />
      <Row title="COMDEY" fetchUrl={request.fetchComedyMovies} />
      <Row title="ROMANCE" fetchUrl={request.fetchRemonceMovies} />
      <Row title="DOCUMENTRY " fetchUrl={request.fetchDocumentriesMovies} />

    </div>
  )
}

export default Main