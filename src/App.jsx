import React from 'react'
import Header from './Components/Header/Header'
import Slider from './Components/Slider/Slider'
import './App.css';
import ProductionHouse from './Components/ProductionHouse/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList/GenreMovieList';
const App = () => {
  return (
    <div className='bg-black/50 '>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App
