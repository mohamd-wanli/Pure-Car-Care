import React from "react";
import { sliderLists } from "../../Constants/constants";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "../../Context/LanguageContext";
const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setcurrentIndex] = useState(0);
  const { isArabic } = useLanguage();
  useGSAP(() => {
    gsap.fromTo("#title", { opacit: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      },
    );
  }, [currentIndex]);

  const totalMenu = sliderLists.length;
  const goToSlide = (index) => {
    const newIndex = (index + totalMenu) % totalMenu;
    setcurrentIndex(newIndex);
  };
  const getServiceAt = (indexOffSet) => {
    return sliderLists[(currentIndex + indexOffSet + totalMenu) % totalMenu];
  };
  const nextService = getServiceAt(1);
  const prevService = getServiceAt(-1);
  const currentService = getServiceAt(0);

  return (
    <section id="menu">
      <h2 id="menu-heading" className="sr-only">
        {isArabic ? "قائمة الخدمات" : "Services Menu"}
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((service, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={service.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {isArabic ? service.nameAr : service.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{isArabic ? prevService.nameAr : prevService.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{isArabic ? nextService.nameAr : nextService.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentService.image} className="object-contain" />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>{isArabic ? "تفاصيل عن:" : "Details for:"}</p>
            <p id="title">
              {isArabic ? currentService.nameAr : currentService.name}
            </p>
          </div>

          <div className="details">
            <h2>{isArabic ? currentService.titleAr : currentService.title}</h2>
            <p>
              {isArabic
                ? currentService.descriptionAr
                : currentService.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
