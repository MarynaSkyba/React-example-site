import React from 'react';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
// import './App.css';
// import Cards from '../Cards';
import HeroSection from '../components/HeroSection/HeroSection';
// import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection id='hero'/>
      <Gallery id='services' />
      <Gallery id='products'/>

      <Footer />
    </>
  );
}

export default Home;