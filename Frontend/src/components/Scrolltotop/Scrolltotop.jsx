import { useState, useEffect } from "react";
import "./Scrolltotop.css";
import "remixicon/fonts/remixicon.css";

const Scrolltotop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <button id="btn" onClick={scrollToTop}>
          <i className="ri-arrow-up-line"></i>
        </button>
      )}
    </div>
  );
};

export default Scrolltotop;
