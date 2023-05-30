import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDiv } from "../../Style/UserCSS";

import firebase from "../../firebase";

import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCF, setPasswordCF] = useState("");
  // const [loaded, setLoaded] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [nameInfo, setNameInfo] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordInfo, setPasswordInfo] = useState("");

  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  const RegisterHandler = async (e) => {
    setLoaded(true);
    e.preventDefault();
    if (!nameCheck) {
      return alert("닉네임 중복검사를 진행해주세요.");
    }
    if (password !== passwordCF) {
      return alert("비밀번호 확인 불일치");
    }
    if (!(name && email && password && passwordCF)) {
      return alert("빠진 부분이 없나 확인해주세요.");
    }

    //파이어 베이스 인증시간이 걸려서.. 위에 promise로 async await 걸어줌
    const createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // console.log(createdUser);
    await createdUser.user.updateProfile({
      //updateProfile을 통해서 firbase에서 제공하는 유저 정보를 설정 할 수 있음
      //displayName은 firbase 자체 기능 : 값 설정 가능
      displayName: name,
      //user 프로필 이미지추가
      photoURL:
        "https://kr.object.ncloudstorage.com/react-project/post/1684304602196.png",
    });
    // console.log(createdUser.user);

    let body = {
      displayName: createdUser.user.multiFactor.user.displayName,
      email: createdUser.user.multiFactor.user.email,
      uid: createdUser.user.multiFactor.user.uid,
      //user 프로필 이미지추가
      photoURL:
        "https://kr.object.ncloudstorage.com/react-project/post/1684304602196.png",
    };
    // console.log(body);
    axios.post("/api/user/register", body).then((res) => {
      if (res.data.success) {
        //회원가입 성공시
        setLoaded(false);
        navigate("/login");
      } else {
        //회원가입 실패시
        return alert("회원가입 실패했어요..");
      }
    });
  };

  const nameCheckHandler = (e) => {
    e.preventDefault();
    if (name === "") {
      return alert("닉네임을 입력해주세요");
    }
    let body = {
      displayName: name,
    };
    axios.post("/api/user/namecheck", body).then((res) => {
      if (res.data.success) {
        if (res.data.check) {
          console.log(res.data);
          setNameCheck(true);
          setNameInfo(
            <div
              style={{
                fontWeight: "bold",
                fontFamily: "Yeon Sung",
              }}
            >
              사용<span style={{ color: "green" }}> 가능한 </span>
              닉네임입니다.
            </div>
          );
        } else {
          setNameInfo(
            <div
              style={{
                fontWeight: "bold",
                fontFamily: "Yeon Sung",
              }}
            >
              사용
              <span
                style={{
                  color: "red",
                }}
              >
                불가한
              </span>
              닉네임입니다.
            </div>
          );
        }
      }
    });
  };

  const passwordCheckHandler = (e) => {
    console.log(password.length);
    e.preventDefault();
    if (password !== passwordCF) {
      setPasswordCheck(false);
      return setPasswordInfo(
        <div
          style={{
            fontWeight: "bold",
            fontFamily: "Yeon Sung",
          }}
        >
          비밀번호 확인<span style={{ color: "red" }}> 불일치 </span>
        </div>
      );
    }
    if (password.length && passwordCF.length > 5) {
      setPasswordCheck(true);
      return setPasswordInfo(
        <div
          style={{
            fontWeight: "bold",
            fontFamily: "Yeon Sung",
          }}
        >
          사용<span style={{ color: "green" }}> 가능한 </span>
          비밀번호입니다.
        </div>
      );
    }

    setPasswordCheck(false);
    return setPasswordInfo(
      <div
        style={{
          fontWeight: "bold",
          fontFamily: "Yeon Sung",
        }}
      >
        비밀번호
        <span
          style={{
            color: "red",
          }}
        >
          {" "}
          6자리 이상 같게{" "}
        </span>
        부탁드려요.
      </div>
    );
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginDiv>
        <form>
          <label htmlFor="">닉네임</label>
          <input
            type="name"
            value={name}
            disabled={nameCheck} //nameCheck가 true로 되면 input값 고정
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
          {nameInfo}
          <button onClick={nameCheckHandler}>닉네임 중복검사</button>
          <label>이메일</label>
          <input
            type="email"
            value={email}
            placeholder=" ex) daegon@na**.com"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            placeholder=" 6글자 이상 입력하세요."
            disabled={passwordCheck}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          <label>비밀번호확인</label>
          <input
            type="password"
            value={passwordCF}
            placeholder=" 6글자 이상 입력하세요."
            disabled={passwordCheck}
            onChange={(e) => {
              setPasswordCF(e.currentTarget.value);
            }}
          />
          {passwordInfo}
          <button onClick={passwordCheckHandler}>비밀번호 검사</button>
          {/* disabled={loaded} */}
          <div style={{ textAlign: "center" }}>
            <label htmlFor="">욕설 및 비하 발언 제재 동의</label>
            <input style={{ marginLeft: "5px" }} type="checkbox" />
          </div>
          <button onClick={RegisterHandler} disabled={loaded}>
            가입신청
          </button>
        </form>
      </LoginDiv>
    </div>
  );
};

export default Register;
