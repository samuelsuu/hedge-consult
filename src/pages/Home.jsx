import React from 'react'
import Hero from '../components/Hero'
import About from './AboutUs'
import Services from '../components/Services '
import FAQ from '../components/FAQ'
import TestimonialSlider from '../components/TestimonialSlider'


function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <TestimonialSlider />
    </div>
  )
}

export default Home