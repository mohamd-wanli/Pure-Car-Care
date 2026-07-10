import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
   <navbar />
  )
}

export default App