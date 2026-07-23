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
  }, [isMobile, isArabic]);

  return (
    <Fragment key={isArabic ? "ar" : "en"}>
      <section id="hero" className="noisy">
        <h1 className="title">PURE</h1>

        <div className="body">
          <div className="content">
            <div className="space-y-5">
              <p className="text-yellow font-semibold">
                {isArabic ? "غسيل. حماية. كمال." : "Wash. Protect. Perfection."}
              </p>
              <p className="subtitle">
                {isArabic ? (
                  <>
                    استمتع بفخامة العناية الفائقة <br /> بسيارتك
                  </>
                ) : (
                  <>
                    {" "}
                    Experience the <span className="text-yellow">
                      Luxury
                    </span>{" "}
                    <br /> of{" "}
                    <span className="text-yellow">Elite Car Care</span>{" "}
                  </>
                )}
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                {isArabic
                  ? '"كل عملية عناية في مركزنا هي مزيج من تركيبات متطورة، وخبرة احترافية، وشغف لا يتوقف — مصممة لاستعادة وحماية بريق سيارتك كما في المعرض."'
                  : '"Every treatment in our garage is a blend of advanced formulations, expert care, and relentless passion — designed to restore and protect your vehicle\'s showroom shine."'}
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
    </Fragment>
  );
};

export default Hero;
