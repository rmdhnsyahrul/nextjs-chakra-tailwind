import React from "react";
import ToggleTheme from "../Button/ToggleTheme";

export const Header = () => {
  return (
    <section id="app-header" className="h-12 w-full relative">
      <div className="absolute top-5 right-5">
        <ToggleTheme />
      </div>
    </section>
  );
};

export default Header;
