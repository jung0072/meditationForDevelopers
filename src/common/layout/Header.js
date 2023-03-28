import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ setIsNavSlide, width }) {
  return (
    <header>
      {width > 450 ? (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/community">Community</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      ) : (
        <div className="slideNavMenu">
          <svg
            className="slideNavMenu-hamburgerBtn"
            onClick={() => {
              console.log("click");

              setIsNavSlide(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="M151 841q-19.35 0-32.675-12.86Q105 815.281 105 795.64 105 776 118.325 763T151 750h659q18.375 0 31.688 13.375Q855 776.751 855 795.491q0 20.141-13.312 32.825Q828.375 841 810 841H151Zm0-219q-19.35 0-32.675-13.56Q105 594.881 105 576.14q0-20.14 13.325-32.64T151 531h659q18.375 0 31.688 12.675Q855 556.351 855 575.991q0 19.641-13.312 32.825Q828.375 622 810 622H151Zm0-220q-19.35 0-32.675-13.56Q105 374.881 105 356.14 105 336 118.325 323T151 310h659q18.375 0 31.688 13.175Q855 336.351 855 355.991q0 19.641-13.312 32.825Q828.375 402 810 402H151Z" />
          </svg>
        </div>
      )}
    </header>
  );
}
