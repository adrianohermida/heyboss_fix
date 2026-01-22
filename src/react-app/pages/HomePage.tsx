

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import Calculator from '../components/Home/Calculator';
import HowItWorks from '../components/Home/HowItWorks';
import Testimonials from '../components/Home/Testimonials';
import Services from '../components/Home/Services';
import VideoJourney from '../components/Home/VideoJourney';
import Blog from '../components/Home/Blog';
import FinalCTA from '../components/Home/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen w-full" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <Header />
        <main>
          <Hero />
          <div className="bg-[var(--color-cardElevated)]">
            <Stats />
          </div>
          <div className="bg-white dark:bg-[var(--color-card)]">
            <Calculator />
          </div>
          <div className="bg-[var(--color-cardElevated)]">
            <HowItWorks />
          </div>
          <div className="bg-white dark:bg-[var(--color-card)]">
            <VideoJourney />
          </div>
          <div className="bg-[var(--color-cardElevated)]">
            <Testimonials />
          </div>
          <div className="bg-white dark:bg-[var(--color-card)]">
            <Services />
          </div>
          <div className="bg-[var(--color-cardElevated)]">
            <Blog />
          </div>
          <FinalCTA />
        </main>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
