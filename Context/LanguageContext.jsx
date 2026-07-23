import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({
  language: "en",
  isArabic: false,
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar" : "en";
  }, [isArabic]);

  return (
    <LanguageContext.Provider value={{ language, isArabic, toggleLanguage }}>
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className={isArabic ? "lang-ar" : "lang-en"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
