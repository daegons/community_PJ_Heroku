import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDiv } from "../../Style/UserCSS";

import firebase from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, seteRrorMsg] = useState("");

  const navigate = useNavigate();

  const singInHandler = async (e) => {
    e.preventDefault();

    if (!(email && password)) {
      //email , password 값이 없을시 alert창
      return alert("빈칸을 채워주세요.");
    }
    //정상 입력시 firebase 인증 진행
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert(`환영합니다.`);
      //로그인 완료시 home으로 이동
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        seteRrorMsg("존재하지 않는 이메일 입니다.");
      } else if (err.code === "auth/wrong-password") {
        seteRrorMsg("비밀번호가 일치하지 않습니다.");
      } else {
        seteRrorMsg("로그인 실패하였습니다.");
      }
    }
  };
  //errorMsg에 변화 있을 때 3초뒤에 에러 메시지 초기화
  useEffect(() => {
    setTimeout(() => {
      seteRrorMsg("");
    }, 4000);
  }, [errorMsg]);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // position: "relative",
      }}
    >
      <LoginDiv>
        <form>
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          {errorMsg !== "" && (
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {errorMsg}
            </p>
          )}
          <button onClick={singInHandler}>로그인</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
          >
            회원가입
          </button>
        </form>
      </LoginDiv>
    </div>
  );
};

export default Login;
