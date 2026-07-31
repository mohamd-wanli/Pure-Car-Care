import React, { useState } from "react";
import { sliderLists } from "../../Constants/constants";
import { useLanguage } from "../../Context/LanguageContext";

const Menu = () => {
  const { isArabic } = useLanguage();
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="menu" className="services-grid-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-yellow text-6xl mb-12">
          {isArabic ? "خدماتنا" : "Our Services"}
        </h2>

        <div className="services-grid">
          {sliderLists.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className={`service-card ${isExpanded ? "expanded" : ""}`}
                onClick={() => toggleExpand(service.id)}
              >
                <div className="service-card-inner">
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={isArabic ? service.nameAr : service.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="service-badge">
                      <span>{isArabic ? service.nameAr : service.name}</span>
                    </div>
                  </div>

                  <div className="service-content">
                    <h3>{isArabic ? service.titleAr : service.title}</h3>
                    <p
                      className={`service-description ${isExpanded ? "expanded" : "collapsed"}`}
                    >
                      {isArabic ? service.descriptionAr : service.description}
                    </p>
                    <button className="expand-btn">
                      {isExpanded ? (
                        <span>{isArabic ? "إخفاء التفاصيل" : "Show less"}</span>
                      ) : (
                        <span>{isArabic ? "عرض التفاصيل" : "Read more"}</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
