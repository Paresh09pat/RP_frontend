import React, { useEffect, useState } from "react";
import "./Timeline_MED.css";

const Timeline_MED = () => {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      // Calculate the active page based on scroll position
      const newActivePage = Math.ceil(scrollTop / pageHeight) + 1;
      setActivePage(newActivePage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
    const pageHeight = window.innerHeight;
    const targetScroll = (pageNumber - 1) * pageHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

  };

  return (

    <div className="timeline-container44">
      <div className="timeline44">
        {[1, 2, 3,4].map((page) => (
          <div
            key={page}
            className={`timeline-point44 ${activePage === page ? "active" : ""}`}
            onClick={() => handlePageClick(page)}
          ></div>
        ))}
        <div className="timeline-line44"></div>
      </div>
    </div>
  );
};

export default Timeline_MED;