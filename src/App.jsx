import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar } from './components';
import Preloader from './components/Preloader';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const App = () => {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <div className="relative z-0 bg-primary">

          <div className="bg-blue-400">
            <Navbar />
            <Hero />
          </div>

          <Suspense fallback={null}>
            <div className="bg-gradient-to-b from-blue-400 via-blue-900 to-primary">
              <About />
            </div>
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
            <Footer />
          </Suspense>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
