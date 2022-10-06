import React from "react";
import { ArenguForm } from "react-arengu-forms";
import "./Verification2.css";
import logo from "../verification1/LogosJuntos.png";

export const Verification2 = ({ setVerification2 }) => {
  const submit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const pi1 = document.querySelector(
        ".af-endingMessage.af-endingMessage-success"
      );

      if (pi1.textContent !== null)
        if (pi1.textContent === "Redirigiendo...") {
          setVerification2(true);
        }
    }, 2500);
  };
  return (
    <>
      <div className="bg">
        <div className="main-container">
          <div onClick={submit} className="ArenguForm">
            <ArenguForm type="submit" id="166664175760139835" />
          </div>
          <div className="ArenguFormLogo">
            <img width={400} alt="logo" className="logo" src={logo}></img>
          </div>
        </div>
      </div>
    </>
  );
};
