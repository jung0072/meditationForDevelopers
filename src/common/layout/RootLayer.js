import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import SlideNavBar from "./SlideNavBar";
import "./RootLayer.css";

function RootLayer(props) {
  const [isNavSlide, setIsNavSlide] = useState(false);
  const { pathname } = useLocation();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  function updateLayout() {
    const width = window.innerWidth;
    setWidth(width);
  }

  return (
    <>
      <SlideNavBar setIsNavSlide={setIsNavSlide} isNavSlide={isNavSlide} />
      <Header setIsNavSlide={setIsNavSlide} width={width} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayer;
