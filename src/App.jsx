import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import { Navbar } from './Components/Navbar';

import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import OurWork from './Components/OurWork';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
   
   <About/>
   <OurWork/>
   <Menu/>
   <Contact/>
   
   </main>
  )
}

export default App