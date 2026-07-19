import { socials } from "../../Constants/constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
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

  return (
    <footer id="contact">
      <div className="content">
        <h2>Where to Find Us</h2>

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
            Open Pure Care Car in Google Maps
          </a>
        </div>

        <div className="contact-blocks">
          <div className="contact-card">
            <div className="card-heading">
              <span className="card-badge">Pure Care Car</span>
              <h3>
                <span>Call / WhatsApp</span>
                <span className="contact-number">00971565679597</span>
              </h3>
            </div>
            <p className="contact-note">
              أفضل خدمة تنظيف وصيانة للسيارات في دبي.
            </p>

            <a
              className="phone-call"
              href="tel:+971565679597"
              aria-label="Call 00971565679597"
            >
              <span className="phone-icon">
                <img src="/images/x.png" alt="phone icon" />
              </span>
              <span>اسحب للاتصال</span>
            </a>
          </div>
        </div>

        <div>
          <h3>Socials</h3>

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
