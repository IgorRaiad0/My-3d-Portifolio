import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Preloader from './components/Preloader';

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

          <div className="bg-gradient-to-b from-blue-400 via-blue-900 to-primary">
            <About />
          </div>
          <Experience />
          {/* <Tech/> */}
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>


        </div>
      </BrowserRouter>
    </>
  )
}

export default App
