import React, { useState, memo } from "react";
import "./Verification1.css";
import logo from "./LogosJuntos.png";

export const Verification1 = memo(({ setVerification1 }) => {
  const [error, setError] = useState(false);
  const [inputChange, setInputChange] = useState("");

  const clave = "JUN2023#";

  return (
    <>
      <div className="main-Verification1">
        <form className="card-body form-group form">
          <img alt="logo" className="logo" src={logo}></img>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"></span>
            <input
              type="password"
              name="clave"
              className="pswBtn"
              placeholder="CONTRASEÑA"
              aria-label="contraseña"
              aria-describedby="basic-addon2"
              onChange={({ target }) => {
                setInputChange(target.value);
              }}
            />
          </div>
          {error && <div className="errorMessage">Wrong Password</div>}
          <button
            type="submit"
            className="access"
            onClick={(e) => {
              e.preventDefault();
              if (inputChange === clave) setVerification1(true);
              else setError(true);
            }}
          >
            Acceder
          </button>
        </form>
        <div className="pieDiv">
          <p className="pie"></p>
          {<p className="pie"></p>}
        </div>
      </div>
    </>
  );
});
