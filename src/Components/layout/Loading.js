import React from "react";
import Hourglass from "./loading-hourglass.gif";

function Loading() {
  return (
    <div>
      <img
        src={Hourglass}
        alt="Loading..."
        className="img-fluid center"
        style={{ width: "250px", margin: "auto", display: "block" }}
      />
    </div>
  );
}

export default Loading;
