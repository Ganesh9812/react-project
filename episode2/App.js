import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, "im child")
);

// so to avoid complex structure, so we use jsx

const heading = React.createElement("h1", { id: "heading" }, "hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// so here root. render repalces the whatever we have in root tag already
