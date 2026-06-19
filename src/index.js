import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

console.log(
  "%c Hey there 👋",
  "color: #3b82f6; font-size: 20px; font-weight: bold;"
);
console.log(
  "%c This portfolio was built by Mohamad Moumneh.\n%c Curious about the stack? Laravel · React · PostgreSQL · ASP.NET Core\n%c Let's connect → https://www.linkedin.com/in/mhmdmoumneh",
  "color: #b7c4d5; font-size: 13px;",
  "color: #60a5fa; font-size: 13px;",
  "color: #4ade80; font-size: 13px;"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
