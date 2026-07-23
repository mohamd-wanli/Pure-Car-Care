import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef, Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../Context/LanguageContext";

const Hero = () => {
  const videoRef = useRef(null);
  const { isArabic } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit =  SplitText.create(".title", {
      type: "chars, words",
    });

    const paragraphSplit =  SplitText.create(".subtitle", {
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

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const video = videoRef.current;

    if (!video) return;

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const playVideoOnScroll = () => {
      const duration = video.duration || 2;

      gsap.to(video, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: startValue,
          end: endValue,
          scrub: true,
        },
      });
    };

    if (video.readyState >= 2) {
      playVideoOnScroll();
    } else {
      video.addEventListener("loadedmetadata", playVideoOnScroll, {
        once: true,
      });
    }
  }, [isMobile]);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">PURE</h1>

        <div className="body">
          <div className="content">
            <div className="space-y-5">
              <p className="text-yellow font-semibold">
                <span className="en-only">Wash. Protect. Perfection.</span>
                <span className="ar-only">غسيل. حماية. كمال.</span>
              </p>
              <p className="subtitle">
                <span className="en-only">
                  Experience the Luxury <br /> of Elite Car Care
                </span>
                <span className="ar-only">
                  استمتع بفخامة العناية الفائقة <br /> بسيارتك
                </span>
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                <span className="en-only">
                  "Every treatment in our garage is a blend of advanced
                  formulations, expert care, and relentless passion — designed
                  to restore and protect your vehicle's showroom shine."
                </span>
                <span className="ar-only">
                  "كل عملية عناية في مركزنا هي مزيج من تركيبات متطورة، وخبرة
                  احترافية، وشغف لا يتوقف — مصممة لاستعادة وحماية بريق سيارتك
                  كما في المعرض."
                </span>
              </p>
              <a
                className="text-yellow font-semibold hover:text-white"
                href="#cocktails"
              >
                {isArabic ? "عرض الخدمات" : "View Services"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/drift_detailed.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
