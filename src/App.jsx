import { BrowserRouter } from "react-router-dom";

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App =() => {
  
  return (

    <BrowserRouter>
      <div className= "relative z-0 bg-primary">

        <div className="bg-blue-400">
          <Navbar/>
          <Hero/>
        </div>

        <div className="bg-gradient-to-b from-blue-400 via-blue-900 to-primary">
          <About/>
        </div>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>


      </div>
    </BrowserRouter>
    
  )
}

export default App
