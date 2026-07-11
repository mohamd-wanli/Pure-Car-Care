import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
     useGSAP(() => {
	const heroSplit = new SplitText(".title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});
	
	// Apply text-gradient class once before animating
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
	
	gsap.from(heroSplit.chars, {
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	});
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
	 },
     	})
	.to(".right-leaf", { y: 200 }, 0)
	.to(".left-leaf", { y: -200 }, 0)
	.to(".arrow", { y: 100 }, 0);
     }, []);
  return (

    <>
    <section id='hero' className='noisy'>
        <h1 className="title">Pure</h1>
        <img src="images/righttire.jpg" alt="lefttire"
        className='right-leaf' />
         <img src="images/lefttire.jpg" alt="righttire"
        className="left-leaf" />

        	<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>Unleash the Ultimate Shine</p>
			 <p className="subtitle">
				Fix Your Car <br /> With Us
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Every product in our collection is a blend of premium formulas, 
                cutting-edge science, and proven results — designed to protect your investment.
			 </p>
			 <a href="#cocktails">View Services</a>
			</div>
		 </div>
		</div>
    </section>
    </>
  )
}

export default Hero