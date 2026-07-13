import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import { Navbar } from './Components/Navbar';

import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
   <Services />
   <About/>
   
   </main>
  )
}

export default App