import React from "react";
import ReactPlayer from "react-player";

const SubPage = () => {
  return (
    <div>
      <h1>서브페이지 입니다.</h1>
      <ReactPlayer
        url={"https://youtu.be/UxpjpxLi-Qg"}
        width="100%"
        height="100%"
        loop={true}
        playing={true}
        muted={true}
        controls={false}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};

export default SubPage;
