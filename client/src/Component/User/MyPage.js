import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MyPageDiv } from "../../Style/UserCSS.js";
import Avatar from "react-avatar";
import axios from "axios";
import firebase from "../../firebase.js";

const MyPage = () => {
  const user = useSelector((state) => state.user);
  const [currentImage, setCurrentImage] = useState("");
  const navigate = useNavigate();
  console.log(user.photoURL);
  useEffect(() => {
    //통신이 없는 순간에 코드가 실행되어서 login페이지로 이동됨 방지하기 위해서 isLoading userSlice에추가
    //user가 변경될 때마다 if문 실행으로 새로고침시 로그인페이지 이동하는거 해결
    if (user.isLoading === true && user.accessToken === "") {
      navigate("/login");
    } else {
      setCurrentImage(user.photoURL);
    }
  }, [user]);

  const ImageUpload = (e) => {
    // console.log(e.target.files[0]);
    var formData = new FormData(); //{}
    formData.append("file", e.target.files[0]); //XMLHtpRequest
    //콘솔로 formData 찍으면 빈 오브젝트로 출력// {}
    //for문으로 콘솔 찍어야 보임..
    // for (const keyValu of formData) console.log(keyValu);
    axios
      .post("/api/user/profile/image", formData)
      .then((res) => {
        // console.log(res.data);
        setCurrentImage(res.data.filePath);
      })
      .catch(() => {});
  };

  const saveProfileHanler = async (e) => {
    e.preventDefault();

    //firebase 이미지 저장 후 mongoDB 저장
    try {
      await firebase.auth().currentUser.updateProfile({
        //user 프로필 이미지추가
        photoURL: currentImage,
      });
    } catch (err) {
      return alert("프로필 저장에 실패하였습니다.");
    }
    let body = {
      photoURL: currentImage,
      uid: user.uid,
    };
    axios.post("/api/user/profile/update", body).then((res) => {
      if (res.data.success) {
        alert("프로필 저장에 성공하였습니다.");
        window.location.reload();
      } else {
        alert("프로필 저장에 실패하였습니다.");
      }
    });
  };

  return (
    <MyPageDiv>
      <form>
        <label>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={ImageUpload}
          />
          <Avatar
            style={{
              background: "rgb(232, 232, 232)",
              border: "1px solid rgb(210, 210, 210)",
              cursor: "pointer",
            }}
            size="100"
            round={true}
            src={currentImage}
          />
        </label>
        <button onClick={saveProfileHanler}>저장</button>
      </form>
    </MyPageDiv>
  );
};

export default MyPage;
