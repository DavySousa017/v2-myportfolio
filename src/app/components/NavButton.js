import React from "react";

const NavButton = (props) => {
  const scrollSmoothly = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={() => {
        scrollSmoothly(props.scrollTo);
      }}
      href="#"
      className="p-3 uppercase tracking-wider hover:text-white hover:-translate-y-0.5 duration-300"
    >
      {props.linkName}
    </button>
  );
};

export default NavButton;
