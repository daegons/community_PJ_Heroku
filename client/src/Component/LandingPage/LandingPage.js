import React from "react";

import "../assets/Landingpage.css";

// import yousolo from "./Component/assets/olnyphYousolo.mp4";
// import tv from "./Component/assets/tv.mp4";
// import cloud from "./Component/assets/cloud.mp4";
import moldives from "../assets/moldives.mp4";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./../MainPage";
import Upload from "./../Post/Upload";
import PostArea from "./../Post/PostArea";
import Edit from "./../Post/Edit";
import Login from "./../User/Login";
import Register from "./../User/Register";
import MyPage from "./../User/MyPage";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <video
        src={moldives}
        autoPlay
        loop
        muted
        playsInline //이부분 추가해도 안돼었던건 i가 소문자여서...ㅠ
        className="video-bg"
      />
      <div className="bg-overlay">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* mongoose를 통해 post, Reple 구현 */}
          <Route path="/upload" element={<Upload />} />
          <Route path="/post/:postNum" element={<PostArea />} />
          <Route path="/edit/:postNum" element={<Edit />} />
          {/* firebase Auth(인증)통해서 login구현 */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* 
        Add
        1. 검색기능 -(post관련)
        2. 유저프로필 이미지 & 이미지 변경
        3. 정렬 최신 / 인기 - (post관련)
      */}
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default LandingPage;
