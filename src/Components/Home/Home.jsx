import React from 'react'
import Navbar from '../Navbar/Navbar'
import Anuncio from '../Anuncio/Anuncio'
import Slider from '../Slider'
import Categories from '../Category/Categories'
import Products from '../Products/Products'
import NewsLetter from '../NewsLetter'
import Footer from '../Footer'
const Home = () => {
  return (
    <div>
        <Anuncio/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
        </div>
  )
}

export default Home