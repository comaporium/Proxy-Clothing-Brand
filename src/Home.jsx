import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import NewItems from './components/newItems/NewItems'
import Accesories from './components/accesories/Accesories'
import Shirt from './components/shirt/Shirt'
import Shorts from './components/shorts/Shorts'
import Testimonials from './components/testimonials/Testimonials'
import Sneakers from './components/sneakers/Sneakers'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const Home = ({bucket, setBucket}) => {
  return (
    <>
        <Header />
        <Nav />
        <NewItems />
        <Accesories />
        <Shirt />
        <Shorts />
        <Sneakers />
        <Testimonials bucket={bucket} setBucket={setBucket}/>
        <Contact />
        <Footer />
    </>
  )
}

export default Home