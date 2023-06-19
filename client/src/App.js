import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
//reduce
import { useDispatch, useSelector } from "react-redux";
import { clearUser, loginUser } from "./Reducer/userSlice";
//firebase(유저 로그인 || 로그아웃 정보 제공)
import firebase from "./firebase";

//components
import Heading from "./Component/Heading";
import Upload from "./Component/Post/Upload";
import Edit from "./Component/Post/Edit";
import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import PostArea from "./Component/Post/PostArea";
import MyPage from "./Component/User/MyPage";
import MainPage from "./Component/MainPage";

// //배경 영상 관련 유투브
// import ReactPlayer from "react-player";

import "./Component/assets/Landingpage.css";

// import yousolo from "./Component/assets/olnyphYousolo.mp4";
// import tv from "./Component/assets/tv.mp4";
import cloud from "./Component/assets/cloud.mp4";
// import moldives from "./Component/assets/moldives.mp4";

import Footer from "./Component/Post/Footer";
import SubPage from "./Component/Post/SubPage";

function App() {
  const [tab, setTab] = useState(false);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(user);
  useEffect(() => {
    //*onAuthStateChanged firebase사용자의 상태 변화에 따라 추적 함수..
    firebase.auth().onAuthStateChanged((userInfo) => {
      //photoURL로 사용자img 줄수있음..firebase.auth자체기능
      // console.log("firebase유저정보", userInfo);

      userInfo
        ? //user 정보 store로 정보 보냄
          dispatch(loginUser(userInfo.multiFactor.user))
        : //false면 유저 정보 비워줌
          dispatch(clearUser());
    });
  }, []);

  // useEffect(() => {
  //   console.log("user : ", user);
  // }, [user]);

  // useEffect(() => {
  //   //signOut() firebase 로그아웃 시키는 함수
  //   firebase.auth().signOut();
  // }, []);
  const onBlueRightHandler = (e) => {
    e.preventDefault();
    tab === false ? setTab(true) : setTab(false);
    // if()
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className={`landingpage ${tab === true ? "active" : ""}`}>
          <video
            // poster="./Component/assets/pictur_moldives.jpg"
            src={cloud}
            autoPlay
            loop
            muted
            playsInline //추가하면 video사용시 아이폰 영상 자동 확대 안되게 설정
            className="video-bg"
          />
          <div
            className="bg-overlay"
            style={{ height: "100vh", overflow: "auto" }}
          >
            <Heading onBlueRightHandler={onBlueRightHandler} tab={tab} />
            <Routes>
              <Route path="/" element={<MainPage />} />
              {/* mongoose를 통해 post, Reple 구현 */}
              <Route path="/upload" element={<Upload />} />
              <Route path="/post/:postNum" element={<PostArea />} />
              <Route path="/edit/:postNum" element={<Edit />} />
              {/* firebase Auth(인증)통해서 login구현 */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/mypage" element={<MyPage />} />
              {/* 서브페이지 추가 */}
              <Route path="/subpage" element={<SubPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
