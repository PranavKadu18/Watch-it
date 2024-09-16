import React from "react";
import nf from "/404.gif";

const NotFound = () => {
  return (
    <img
      className="w-[50%] h-[50%] object-cover text-white bg-white"
      src={nf}
      alt=""
    />
  );
};

export default NotFound;
