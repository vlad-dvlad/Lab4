import React from "react";
import Link from "./components/Link/Link";

const App = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      <Link page="http://www.facebook.com">Facebook</Link>
    </div>
  );
};

export default App;
