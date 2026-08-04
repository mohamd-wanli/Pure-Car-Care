import { socials } from "../../Constants/constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../Context/LanguageContext";

const Contact = () => {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [maxDrag, setMaxDrag] = useState(96);
  const trackRef = useRef(null);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const dragXRef = useRef(0);
  const { isArabic } = useLanguage();
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      });
  });

  useEffect(() => {
    const updateMaxDrag = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.clientWidth;
        setMaxDrag(Math.max(72, trackWidth - 56));
      }
    };

    updateMaxDrag();
    window.addEventListener("resize", updateMaxDrag);

    return () => window.removeEventListener("resize", updateMaxDrag);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+971565679597";
  };

  const startDrag = (event) => {
    event.preventDefault();
    setIsDragging(true);
    startXRef.current = event.clientX;
    startOffsetRef.current = dragX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event) => {
    if (!isDragging) return;

    const nextX = startOffsetRef.current + event.clientX - startXRef.current;
    const clampedX = Math.max(0, Math.min(maxDrag, nextX));
    dragXRef.current = clampedX;
    setDragX(clampedX);
  };

  const endDrag = (event) => {
    if (!isDragging) return;

    setIsDragging(false);

    const finalX = dragXRef.current;

    if (finalX >= maxDrag * 0.75) {
      handleCall();
    } else {
      dragXRef.current = 0;
      setDragX(0);
    }

    if (event?.currentTarget?.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <footer id="contact">
      <div className="content">
        <h2 className="en-only">Where to Find Us</h2>
        <h2 className="ar-only">أين تجدنا</h2>

        <div className="contact-map">
          <iframe
            title="Pure Care Car location"
            src="https://maps.google.com/maps?q=24.1760155,55.7699573&z=17&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="open-google-maps"
            href="https://www.google.com/maps?cid=13138697658116202461"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isArabic
              ? "افتح Pure Car Care في خرائط جوجل"
              : "Open Pure Car Care in Google Maps"}
          </a>
        </div>

        <div className="contact-blocks">
          <div className="contact-card">
            <div className="card-heading">
              <span className="card-badge">Pure Care Car</span>
              <h3>
                <span>{isArabic ? "اتصال / واتساب" : "Call / WhatsApp"}</span>
                <span className="contact-number">
                  {isArabic ? "971565679597+" : "+971565679597"}
                </span>
              </h3>
            </div>
            <p className="contact-note">
              {isArabic
                ? "العناية التي تستحقها سيارتك بمعايير عالمية في الإمارات."
                : "The care your car deserves with global standards in the UAE."}
            </p>

            <div
              ref={trackRef}
              className={`phone-call ${isDragging ? "dragging" : ""}`}
              role="button"
              tabIndex={0}
              aria-label="Swipe to call"
              onPointerDown={startDrag}
              onPointerMove={moveDrag}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleCall();
                }
              }}
            >
              <span
                className="phone-icon"
                style={{ transform: `translateX(${dragX}px)` }}
              >
                <img src="/images/call.svg" alt="phone icon" />
              </span>
              {isArabic ? "اسحب للاتصال" : "Swipe to call"}
            </div>
          </div>
        </div>

        <div>
          <h3>{isArabic ? "تابعنا" : "Socials"}</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
