import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { featureLists, goodLists } from '../../Constants/constants'

const OurWork = () => {
 const isMobile = useMediaQuery({ maxWidth: 767 });
 
 useGSAP(() => {
	const start = isMobile ? 'top 20%' : 'top top';
	
	const maskTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#work',
		start,
		end: 'bottom center',
		scrub: 1.5,
		pin: true
	 }
	})
	
	maskTimeline
	 .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
	 .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut '})
	 .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
	 .to('#follow-btn', { opacity: 1, duration: 0.6, ease: 'power1.inOut'})
 })
 
 return (
	<div id="work">
	 <div className="container mx-auto h-full pt-20">
		<h2 className="will-fade">Our Work</h2>
		
		<div className="content">
		 <ul className="space-y-4 will-fade">
			{goodLists.map((feature, index) => (
			 <li key={index} className="flex items-center gap-2">
				<img src="/images/check.png" alt="check" />
				<p>{feature}</p>
			 </li>
			))}
		 </ul>
		 
		 <div className="cocktail-img">
			<img
				src="/images/download.jpg"
				alt="car"
				className="abs-center masked-img size-full object-contain"
			/>
		 </div>
		 
		 <ul className="space-y-4 will-fade">
			{featureLists.map((feature, index) => (
			 <li key={index} className="flex items-center justify-start gap-2">
				<img src="/images/check.png" alt="check" />
				<p className="md:w-fit w-60">{feature}</p>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="masked-container">
		 <h2 className="will-fade">Showroom-Worthy Perfection</h2>
		 <div id="masked-content">
			<h3>Driven by Craft, Polished with Passion</h3>
			<p>This isn’t just a wash. It’s a carefully crafted restoration made just for your vehicle.</p>
			<a
			 id="follow-btn"
			 href="https://www.instagram.com/purecarcare.ae?igsh=eWptMzl5Z2NseTFi&utm_source=qr"
			 target="_blank"
			 rel="noreferrer"
			 className="mt-4 ml-55 inline-block rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-black opacity-0"
			>
			  Follow on Instagram
			</a>
		 </div>
		</div>
	 </div>
	</div>
 )
}
export default OurWork