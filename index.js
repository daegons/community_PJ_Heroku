//require바닥에 ...뜨는거 관련 https://hini7.tistory.com/226#toc-%ED%98%B8%ED%99%98
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
//app이라는 이름으로 express객체 할당
const app = express();

const config = require("./server/config/key");
// console.log(path);
// console.log(app);
//static으로 사용할 폴더 알려줌 폴더안의 모든 html img css js를 사용할꺼라 폴더 지정
app.use(express.static(path.join(__dirname, "./client/build")));

//아래 두개 추가로 클라이언트에서 보내는 body추적이 가능해짐 //추가 전에는 클라에서 보낸 body undifind로 뜸..
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//post.js 분리시킨거 사용
//익스프레스.js router 사용해서 공통부분 빼서 나눔
//예) /api/post로 오는 요청은 ./server/Router/post로 보내줌.
app.use("/api/post", require("./server/Router/post"));
app.use("/api/user", require("./server/Router/user"));
app.use("/api/reple", require("./server/Router/reple"));

//서버 열고
//헤로쿠에서 지정하는 포트 or 5000번 포트
const port = process.env.PORT || 5000;
app.listen(port, () => {
  //몽고DB와 연결//mongoose사용
  mongoose
    .connect(config.mongoURI) //몽구스DB랑 정상 연결 되면 .then으로...
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("몽고DB와 연결중..");
    }) //연결 불가시 .catch로....
    .catch((err) => {
      console.log(err);
    });
});
//서로 다른 포트끼리 연결하면 cors이슈 발생..

//req 클라 -> 서버에 보내는 요청
//res 서버 -> 클라에 보내는 응답
app.get("/", (req, res) => {
  //server폴더의 현재 경로 + ./client/build/index.html 합처주는 라이브러리 추가
  //path 라이브러리..  server쪽 현재 이페이지 경로 __dirname
  //* C:\Users\qzom1\OneDrive\바탕 화면\react-project\client\build\index.html식으로 합쳐짐..

  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//  * = 은 모든 것을 의미함,js 정규식
// http://localhost:3000/뒤로 어떠한 경로로 와도 html파일을 띄울거라 *만듬
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//* mongoDB 모든 아이피 연결 가능 0.0.0.0/0

//! cors이슈
//*CORS 이슈는 외부 API 서버에서 데이터를 가지고 올 때 헤더에 접근을 허락하는 내용이 없으면 발생한다.

//* 기능 구현
//* 클라쪽에서 제출 누르면 server에서는 body data받아서 mongoDB에 저장후 데이터 요청하면 뿌려줌..
//* 몽고DB 모델 설정
//* mongoDB noSQL 좀더 자유로운 DB
