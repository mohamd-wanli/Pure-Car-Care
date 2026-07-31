import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../Context/LanguageContext";

const MOBILE_BREAKPOINT = 767;

const Hero = () => {
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const { isArabic } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: MOBILE_BREAKPOINT });

  useGSAP(() => {
    const heroSplit = SplitText.create(".title", {
      type: "chars, words",
    });

    const paragraphSplit = SplitText.create(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-yellow"));

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
  }, []);

  useGSAP(() => {
    if (isMobile) {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    } else {
      const video = videoRef.current;
      if (!video) return;

      const setupVideoScroll = () => {
        const duration = video.duration || 2;
        gsap.to(video, {
          currentTime: duration,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      };

      if (video.readyState >= 2) {
        setupVideoScroll();
      } else {
        video.addEventListener("loadedmetadata", setupVideoScroll, {
          once: true,
        });
      }
    }
  }, [isMobile]);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title" dir="ltr">
          PURE
        </h1>

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

      <div className="video absolute inset-0 overflow-hidden hero-bg-layer">
        {isMobile ? (
          <img
            ref={imageRef}
            src="/images/hero.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : (
          <video
            ref={videoRef}
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/drift_detailed.webm" type="video/webm" />
            <source
              src="/videos/drift_detailed_compressed.mp4"
              type="video/mp4"
            />
          </video>
        )}
      </div>
    </>
  );
};

export default Hero;
