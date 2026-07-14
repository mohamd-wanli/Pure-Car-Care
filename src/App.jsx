import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import { Navbar } from './Components/Navbar';

import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import OurWork from './Components/OurWork';
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
   <Services />
   <About/>
   <OurWork/>
   
   </main>
  )
}

export default App