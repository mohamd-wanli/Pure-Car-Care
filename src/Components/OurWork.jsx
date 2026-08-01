import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import {
  featureLists,
  featureListsAr,
  goodLists,
  goodListsAr,
} from "../../Constants/constants";
import { useLanguage } from "../../Context/LanguageContext";
const OurWork = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { isArabic } = useLanguage();
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut ",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" })
      .to("#follow-btn", { opacity: 1, duration: 0.6, ease: "power1.inOut" });
  });
  const currentGoodLists = isArabic ? goodListsAr : goodLists;
  const currentFeatureLists = isArabic ? featureListsAr : featureLists;

  return (
    <div id="work">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">{isArabic ? "أعمالنا" : "Our Work"}</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {currentGoodLists.map((feature, index) => (
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
            {currentFeatureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">
            {isArabic ? "كمال يليق بالمعرض" : "Showroom-Worthy Perfection"}
          </h2>
          <div id="masked-content">
            <h3>
              {isArabic
                ? " بُنيَ على المهارة، وقادهُ الإتقان"
                : "Built on Skill, Driven by Pride."}
            </h3>
            <p>
              {isArabic
                ? "هذه ليست مجرد صيانة. هذا تجديد احترافي فائق لسيارتك."
                : "This is not maintenance. This is master-level rejuvenation for your car."}
            </p>
            <a
              id="follow-btn"
              href="https://www.instagram.com/purecarcare.ae?igsh=eWptMzl5Z2NseTFi&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="mt-4 ml-55 inline-block rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-black opacity-0"
            >
              {isArabic ? "تابعنا على إنستغرام" : "Follow on Instagram"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurWork;
