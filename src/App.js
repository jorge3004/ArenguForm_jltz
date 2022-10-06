import React, { useState } from "react";
import "./App.css";
import { JltcGam } from "./jltcgam/JltcGam";
import { Verification1 } from "./verification1/Verification1";
import { Verification2 } from "./verification2/Verification2";
function App() {
  const [verification1, setVerification1] = useState(false);
  const [verification2, setVerification2] = useState(false);
  return (
    <>
      {/* {verification1 ? (
        <JltcGlobal />
      ) : (
        <Verification1
          verification1={setVerification2}
          setVerification1={setVerification1}
        />
      )} */}

      {verification2 ? (
        <JltcGam />
      ) : verification1 ? (
        <Verification2 setVerification2={setVerification2} />
      ) : (
        <Verification1
          verification1={setVerification2}
          setVerification1={setVerification1}
        />
      )}
    </>
  );
}

export default App;
