import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./SlideNavBar.css";

function SlideNavBar({ setIsNavSlide, isNavSlide }) {
  return (
    <CSSTransition
      in={isNavSlide}
      mountOnEnter
      unmountOnExit
      timeout={500}
      classNames="slideNavBarTransition"
    >
      <div className="slideNavBar">
        <svg
          className="slideNavMenu-closeBtn"
          onClick={() => {
            // When the close button clicked
            setIsNavSlide(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
        >
          <path d="M256 842.153 213.847 800l224-224-224-224L256 309.847l224 224 224-224L746.153 352l-224 224 224 224L704 842.153l-224-224-224 224Z" />
        </svg>
        <nav className="slideNavBar-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/community">Community</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </CSSTransition>
  );
}

export default SlideNavBar;
