import React from "react";
import "./ActiveRoute.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const ActiveRoute = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  //   const navStyle = {
  //     content: "",
  //     position: "absolute",
  //     height: "3px",
  //     width: "0",
  //     backgroundColor: "#ffffff",
  //     borderRadius: "20px",
  //   };

  return (
    <div>
      <div>
        <Link
          style={{
            // position: match ? "absolute" : "relative",
            height: match ? "2px" : "0px",
            width: match ? "10px" : "0px",
            backgroundColor: match ? "red" : "transparent",
            borderRadius: match ? "10px" : "0px",
            // color: match ? navStyle : "black",
            textDecoration: match ? "none" : "none",
            // underline: match ? "none" : "",
          }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    </div>
  );
};

export default ActiveRoute;
