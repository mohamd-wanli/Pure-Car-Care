import { useEffect, useState } from "react";
import { navLinks } from "../../Constants/constants.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../Context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
  const { isArabic, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-top-row">
          <a href="#home" className="logo-link">
            <img src="/images/logo.png" alt="Logo" className="logo-img" />
            <p className="logo-text">PureCarCare</p>
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="lang-toggle"
              aria-label={
                isArabic ? "Switch to English" : "التبديل إلى العربية"
              }
            >
              {isArabic ? "EN" : "عربي"}
            </button>

            <button
              className="md:hidden flex flex-col gap-1 p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </button>
          </div>
        </div>

        <div
          className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-4 md:gap-7 mt-3 md:mt-0 w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-7 lg:gap-12 w-full md:w-auto">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm md:text-base"
                >
                  {isArabic ? link.titleAr : link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
