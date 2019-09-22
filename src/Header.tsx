import React, { MouseEvent } from "react";

const Header = () => {
  function handleClick(e: MouseEvent) {
    e.preventDefault();
    console.log(`The link was clicked. ${e.target}`);
  }

  return <h1 onClick={handleClick}>Hello</h1>;
};

export default Header;
