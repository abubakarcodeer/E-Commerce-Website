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
    <div className='dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
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