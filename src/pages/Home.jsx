import React from 'react'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/HeroSection'
import Category from '../components/Category'
import HomePageProducts from '../components/HomePageProducts'
import Track from '../components/Track'
import Testimonial from '../components/Testimonial'
import Loader from '../components/Loader'

const Home = () => {

  return (
    <div className='dark:bg-gray-800'>
        <Layout>
            <HeroSection />
            <Category />
            <HomePageProducts />
            <Track />
            <Testimonial />
        </Layout>
    </div>
  )
}

export default Home