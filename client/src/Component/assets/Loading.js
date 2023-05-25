// Loading.js
import React from "react";
import { Background, LoadingText } from "./LoadingCSS";

//svg가 안깨짐.. good!!!!
import Spiner from "./Ripple.svg";
const Loading = () => {
  return (
    <Background>
      <img src={Spiner} alt="로딩중" />
      <LoadingText>로딩중..</LoadingText>
    </Background>
  );
};

export default Loading;
