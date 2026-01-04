import React from 'react'
import HelpSection from '@/components/HelpSection';
import Hero from '@/components/Hero';
import PlansSection from '@/components/PlansSection';
import StudiesCard from '@/components/StudiesCard';
import Testimonials from '@/components/Testimonials';
import ToolsSection from '@/components/ToolsSection';
import TrafficSection from '@/components/TrafficSection';
const Home = () => {
  return (
    <>
    <Hero/>
     <ToolsSection/>
     <TrafficSection/>
     <HelpSection/>
     <StudiesCard/>
      <PlansSection/>
      <Testimonials/>
    </>
  )
}

export default Home