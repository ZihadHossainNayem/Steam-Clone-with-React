import React, { useState, useRef, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const LanguagePopUp = () => {
  const languages = [
    "简体中文 (Simplified Chinese)",
    "繁體中文 (Traditional Chinese)",
    "日本語 (Japanese)",
    "한국어 (Korean)",
    "ไทย (Thai)",
    "Български (Bulgarian)",
    "Čeština (Czech)",
    "Dansk (Danish)",
    "Deutsch (German)",
    "English",
    "Español - España (Spanish - Spain)",
    "Español - Latinoamérica (Spanish - Latin America)",
    "Ελληνικά (Greek)",
    "Français (French)",
    "Italiano (Italian)",
    "Magyar (Hungarian)",
    "Nederlands (Dutch)",
    "Norsk (Norwegian)",
    "Polski (Polish)",
    "Português (Portuguese - Portugal)",
    "Português - Brasil (Portuguese - Brazil)",
    "Română (Romanian)",
    "Русский (Russian)",
    "Suomi (Finnish)",
    "Svenska (Swedish)",
    "Türkçe (Turkish)",
    "Tiếng Việt (Vietnamese)",
    "Українська (Ukrainian)",
    "Report a translation problem",
  ];

  /* pop up state */
  const [isOpen, setIsOpen] = useState(false);

  /* when clicking outside close the popup */
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  /* target language */
  const handleLanguageSelect = (e) => {
    const selectedLanguage = e.target.value;
    console.log(selectedLanguage);
  };

  /* language menu pop up */
  const handleDropDownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(".dropdown")) return;
    setIsOpen(false);
  };

  return (
    <div className="relative text-sm flex items-center" ref={dropdownRef}>
      <span
        onClick={handleDropDownToggle}
        className="cursor-pointer flex items-center gap-1 hover:text-white"
      >
        language <AiFillCaretDown />
      </span>
      {isOpen && (
        <ul
          onClick={handleOutsideClick}
          className="absolute z-[150] w-[320px] right-0 top-full bg-[#3D4450] shadow-custom py-2"
        >
          {languages.map((language) => (
            <li
              key={language}
              onClick={handleLanguageSelect}
              className="cursor-pointer px-4 py-1 text-xs text-[#dcdedf] hover:text-black hover:bg-[#f3f3f3]"
            >
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguagePopUp;
