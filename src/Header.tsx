import React, { MouseEvent, forwardRef } from "react";

interface HeaderProps {
  id: string;
}

const Header = forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ id, children }, ref) => {
    function handleClick(e: MouseEvent) {
      e.preventDefault();
      console.log(`The link was clicked. ${e.target}`);
    }

    return (
      <h1 ref={ref} onClick={handleClick}>
        Hello {id}
      </h1>
    );
  }
);

export default Header;
