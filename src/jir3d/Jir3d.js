import React from "react";
import "./Jir3d.css";

export const Jir3d = () => {
  return (
    <div className="iframe-container">
      <iframe
        id="marco"
        src="https://jir3d.com.mx"
        allowFullScreen
        title="myFrame"
      ></iframe>
    </div>
  );
};
