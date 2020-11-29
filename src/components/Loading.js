import React from "react";
import loading from "./loading.gif";
const Loading = () => {
  return (
    <>
      <img
        src={loading}
        alt="Loading"
        style={{ width: "150px", margin: "auto", display: "block" }}
      />
    </>
  );
};

export default Loading;
