import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../Context/LanguageContext";

const About = () => {
  const { isArabic } = useLanguage();
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5",
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">
              {isArabic ? "أفضل الخدمات" : "Best Services"}
            </p>
            <h2 className="en-only">
              Where every detail matters <span className="text-white">-</span>
              from prep to protection
            </h2>
            <h2 className="ar-only">
              حيث كل التفاصيل مهمة <span className="text-white">-</span> من
              التحضير إلى الحماية
            </h2>
          </div>

          <div className="sub-content">
            <p>
              {isArabic
                ? "كل خدمة نقدمها تعكس شغفنا بالتفاصيل — من التحضير الأولي إلى طبقة الحماية النهائية. هذا الاهتمام هو ما يحول الصيانة الروتينية إلى تجربة قيادة استثنائية."
                : "Every service we perform is a reflection of our obsession with detail — from the initial prep to the final protective coat. That care is what turns routine maintenance into an elite driving experience."}
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                {isArabic
                  ? "أكثر من +12000 عميل"
                  : "More than +12000 customers"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/car.jpg" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/car2.jpg" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/car33.jpg" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/car44.jpg" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/car5.jpg" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};
export default About;
