# :pushpin: React.js_community
>커뮤니티 서비스 
 
>[포트폴리오](https://react-project.herokuapp.com/)

>[깃허브](https://github.com/daegons/community_PJ_Heroku)

>[블로그](https://qzom1425.tistory.com/category/Project%28%EA%B0%9C%EC%9D%B8%20%EA%B8%B0%EB%A1%9D%EC%9A%A9%29?page=8)
</br>

## 제작 기간

- 2023년 5월 ~ 작업중
- 개인 프로젝트

</br>

## 사용 기술

#### `Front-end`
   - react: ^18.2.0
   - axios: ^1.4.0
   - bootstrap: ^5.2.3
   - firebase: ^9.22.0
   - framer-motion: ^10.12.16
   - http-proxy-middleware: ^2.0.1
   - moment: ^2.29.4,
   - react-router-dom: ^6.11.1
   - emotion: ^11.11.0
   - reduxjs-toolkit: ^1.7.1
   
#### `Back-end`
  - aws-sdk: ^2.348.0
  - express: ^4.17.2
  - mongoose: ^6.1.3
  - nodemon: ^2.0.22
  - path: ^0.12.7
  - multer: ^1.4.4
  - multer-s3: ^2.10.0
  
</br>

## 핵심 기능

<details>
<summary> 로그인 기능 </summary>
<div markdown="1">
  
  - firebase Auth 활용
  - [블로그](https://qzom1425.tistory.com/entry/%EC%9C%A0%EC%A0%80-%EC%9D%B8%EC%A6%9D-%EA%B8%B0%EB%8A%A5-firebase-auth1-1)
        
</div>
</details>

<details>
<summary> 게시글 수정,삭제,등록 기능 </summary>
<div markdown="1">
  
  - mongoose를 사용하여 mongoDB에 작업 
  - [블로그](https://qzom1425.tistory.com/entry/Mongoose%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-Nodejs%EC%99%80-MongoDB%EB%A5%BC-%EC%97%B0%EA%B2%B0)
        
</div>
</details>

<details>
<summary> 게시글 정렬 기능 </summary>
<div markdown="1">
  
  - sort()메서드 활용 
  - [블로그](https://qzom1425.tistory.com/entry/%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%B5%9C%EC%8B%A0-%EC%9D%B8%EA%B8%B0%EC%88%9C%EC%9C%BC%EB%A1%9C-%EC%A0%95%EB%A0%AC)
        
</div>
</details>

<details>
<summary> 내용 검색 기능 </summary>
<div markdown="1">
  
  - $regex(정규표현식) 활용
  - [블로그](https://qzom1425.tistory.com/entry/%EA%B2%8C%EC%8B%9C%EA%B8%80-%EA%B2%80%EC%83%89%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80)
        
</div>
</details>

</br>

## 트러블 슈팅
<details>
<summary>server, res.sendFile(경로 문제)</summary>
<div markdown="1">

- path 내장 모듈, app.use(express.static(...)) 사용하여 해결
- [블로그](https://qzom1425.tistory.com/entry/%EC%9E%91%EC%97%85%EC%A4%91-%EB%A7%8C%EB%82%9C-%EC%97%90%EB%9F%AC)

</div>
</details>

<details>
<summary>Axios 무한 렌더 문제</summary>
<div markdown="1">
  
  - useEffect훅을 사용하여 해결
  
</div>
</details>

<details>
<summary>CORS 이슈 문제</summary>
<div markdown="1">
  
  - http-proxy-middleware를 사용하여 cors 정책을 우회로 해결
  - [블로그](https://qzom1425.tistory.com/entry/%EB%A1%9C%EC%BB%AC-%ED%98%B8%EC%8A%A4%ED%8A%B8-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0-%EB%AC%B8%EC%A0%9C-CORS-%EC%9D%B4%EC%8A%88)
  
</div>
</details>

<details>
<summary> client에서 보내온 req.body, server에서 확인시 디폴트 값으로 Undefined 설정 문제 </summary>
<div markdown="1">
  
  - 버전 업데이트로 react에 내장된 body-parser 모듈 사용
  - [블로그](https://qzom1425.tistory.com/entry/client%EC%97%90%EC%84%9C-server%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B3%B4%EB%82%B4%EA%B8%B0undefined)
</div>
</details>
    
<details>
<summary> server에서 mongoDB 데이터 find()로 찾을 시에 생기는 문제 </summary>
<div markdown="1">
   
  - findOne() 사용으로 단일 객체를 반환하여 해결
  - [블로그](https://qzom1425.tistory.com/entry/%EA%B8%80-%EC%9E%91%EC%84%B1-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A7%88%EB%8B%A4-%EC%88%AB%EC%9E%90-%EB%B6%80%EC%97%AC%ED%95%98%EA%B8%B0)
   
</div>
</details>    

<details>
<summary> video 태그로 바탕화면에 영상 입힐 시에 아이폰 자동 영상 확대 문제(안드로이드는 정상) </summary>
<div markdown="1">
  
  - video태그에 playsInline 속성 추가로 해결
  
</div>
</details>    

<details>
<summary> firebase import 버전 문제 </summary>
<div markdown="1">
  
  - firebase import시에 compat 추가로 해결
  - [블로그](https://qzom1425.tistory.com/entry/%EC%9C%A0%EC%A0%80-%EC%9D%B8%EC%A6%9D-%EA%B8%B0%EB%8A%A5-firebase1-2)
        
</div>
</details>  
    
<details>
<summary> redux 비직렬화 관련 에러 </summary>
<div markdown="1">
  
  - 미들웨어 설정으로 임시해결
  - [블로그](https://qzom1425.tistory.com/entry/Redux-Redux-Toolkit-%EC%9E%91%EC%97%85)
   
</div>
</details> 
    
<details>
<summary> Axios통신 시에 딜레이 문제로 접근성 낮아지는 문제 </summary>
<div markdown="1">
  
   - 로딩화면(스피너) 추가
   - [블로그](https://qzom1425.tistory.com/entry/%EC%8A%A4%ED%94%BC%EB%84%88-%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80)
   
</div>
</details> 
    
</br>
    
## 회고 및 느낀점
>[개인 포트폴리오 개발 회고](https://qzom1425.tistory.com/entry/%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-%EB%B0%8F-%EB%8A%90%EB%82%80%EC%A0%90)    
  
</br>
  
## 팀 프로젝트 및 개인 작업물

<details>
<summary> (팀프로젝트)카카오맵을 활용하여 관광지 검색 사이트 구현 </summary>
<div markdown="1">
  
  * 맡은 작업
    - 지역별 관광지 정보 및 좌표 data search
    - 서브 페이지, 게시판 구현 
  - [사이트](https://daegons.github.io/t-project1/)
  - [회고 및 느낀점](https://qzom1425.tistory.com/entry/%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0)
        
</div>
</details>
    
</br>
