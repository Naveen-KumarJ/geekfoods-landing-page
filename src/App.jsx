import React from 'react'
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import HeroSection from './components/HeroComponent/HeroSection';
import CardSection from './components/CardComponent/CardSection';
import TestimonialSection from './components/TestimonialComponent/TestimonialSection';
import Footer from './components/FooterComponent/Footer';
function App() {
  return (
    <>
      <NavBarComponent />
      <HeroSection />
      <CardSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}

export default App