import Footer from '@/components/Footer';
import HelpSection from '@/components/HelpSection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PlansSection from '@/components/PlansSection';
import StudiesCard from '@/components/StudiesCard';
import Testimonials from '@/components/Testimonials';
import ToolsSection from '@/components/ToolsSection';
import TrafficSection from '@/components/TrafficSection';
import React from 'react';

const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <ToolsSection/>
     <TrafficSection/>
     <HelpSection/>
     <StudiesCard/>
      <PlansSection/>
      <Testimonials/>
      <Footer/>
   
    </>
  );
};

export default App;
