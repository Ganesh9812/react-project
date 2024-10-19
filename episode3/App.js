import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Namaste react</h1>;
const HeadingComponent = () => {
  return <h1>Namaste react</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// so here root. render repalces the whatever we have in root tag already
