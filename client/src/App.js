import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
//reduce
import { useDispatch } from "react-redux";
import { clearUser, loginUser } from "./Reducer/userSlice";
//firebase
import firebase from "./firebase";

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
  const dispatch = useDispatch();
  const [tab, setTab] = useState(false);
  // console.log(user.displayName);
  useEffect(() => {
    //onAuthStateChanged 사용자의 상태 변화에 따라 추적 함수..
    firebase.auth().onAuthStateChanged((userInfo) => {
      //photoURL로 사용자img 줄수있음..firebase.auth자체기능
      // console.log(userInfo._delegate.photoURL);

      //사용자 로그아웃 or 로그인하지 않은 상태라면 -> null값
      //로그인했다면 로그인한 데이터를 보여줌
      // console.log("유저정보 : ", userInfo);
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
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
    //playsinline 이거는 아이폰 사용시 video먼저 뜨는거 방지/ 안드는 위에 두개만해도 가능

    <>
      <div style={{ height: "100vh" }}>
        <div className={`landingpage ${tab === true ? "active" : ""}`}>
          <video
            // poster="./Component/assets/pictur_moldives.jpg"
            src={cloud}
            autoPlay
            loop
            muted
            playsInline //이부분 추가해도 안돼었던건 i가 소문자여서...ㅠ
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
          </div>
          <Footer />
        </div>
        {/* 
        Add
        1. 검색기능 -(post관련)
        2. 유저프로필 이미지 & 이미지 변경
        3. 정렬 최신 / 인기 - (post관련)
      */}
      </div>
    </>
  );
}

export default App;
