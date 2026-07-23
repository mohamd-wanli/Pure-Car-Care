import { useEffect } from "react";
import { navLinks } from "../../Constants/constants.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../Context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
  const { isArabic, toggleLanguage } = useLanguage();
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
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" />
          <p>PureCarCare</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{isArabic ? link.titleAr : link.title}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggleLanguage}
          className="lang-toggle"
          aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
        >
          {isArabic ? "EN" : "عربي"}
        </button>
      </div>
    </nav>
  );
};
