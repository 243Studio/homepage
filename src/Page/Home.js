//import { fontStyle } from '@mui/system'
import React from 'react'
import logo from '../assets/img/logo.png'
import './Home.css'
function Home() {
  return (
    <div className="home-container light">
        <img alt="243 logo" id="logo" src={logo}></img>
        <h3 id="tagline">Decouvrez notre portefolio</h3>
        <a target="_blank" href='https://app.243studio.me' id="portfolio-button">Portfolio</a>
        </div>
  )
}

export default Home