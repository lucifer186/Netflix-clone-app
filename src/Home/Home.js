import React from 'react'
// import desk from './jub'
import Images from '../images/home-tv.jpg'
import Images1 from '../images/home-mobile.jpg'
import Images2 from '../images/home-imac.jpg'
import './Home.css'
function Home() {
  return (
    <div className='home'>
      <div id='a' >
      <h1> Enjoy on your TV. </h1>
       <img src= {Images}  alt= 'Tv-show' />
       <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more</p>
      </div>

      <div id='b' >
      <h1> Download your programmes to watch on the go. </h1>
       <img src= {Images1}  alt= 'Tv-show' />
       <p>Save your data and watch all your favourites offline.</p>
      </div>

      <div id='c' >
      <h1> Watch everywhere. </h1>
       <img src= {Images2}  alt= 'Tv-show' />
       <p>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more</p>
      </div>
     
    </div>
  )
}

export default Home