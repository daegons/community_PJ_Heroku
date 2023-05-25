import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { SubPageDiv } from "../../Style/SubPageCSS";

const SubPage = () => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: hidden;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <h1>서브페이지 입니다.</h1>
      {/* <ReactPlayer
        url={"https://youtu.be/UxpjpxLi-Qg"}
        width="100%"
        height="100%"
        loop={true}
        playing={true}
        muted={true}
        controls={false}
        style={{ pointerEvents: "none" }}
      /> */}
    </div>
  );
};

export default SubPage;
