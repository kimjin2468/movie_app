import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link
        to={{
          pathname: "/about",
          state: {
            name: "jin",
            from: "건흥",
          },
        }}
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
