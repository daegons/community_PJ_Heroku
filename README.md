# :pushpin: community
>커뮤니티 서비스  
>[포트폴리오](https://react-project.herokuapp.com/)

</br>

## 1. 제작 기간

- 2023년 5월 ~ 작업중
- 개인 프로젝트

</br>

## 2. 사용 기술

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


## 4. 핵심 기능
server와 client간의 axios(비동기 통신)를 활용한 데이터 송수신을 통해 </br> mongoose를 활용하여 mongoDB에 등록 및 수정 삭제(CRUD)정보를 웹페이지에 보여줍니다.


- **Axios 비동기 요청** :pushpin: [코드 확인](https://github.com/Integerous/goQuality/blob/b587bbff4dce02e3bec4f4787151a9b6fa326319/frontend/src/components/PostInput.vue#L67)
  - Vue.js로 렌더링된 화면단에서, 사용자가 등록을 시도한 URL의 모양새를 정규식으로 확인합니다.
  - URL의 모양새가 아닌 경우, 에러 메세지를 띄웁니다.
  
### 4.3. Controller

![](https://zuminternet.github.io/images/portal/post/2019-04-22-ZUM-Pilot-integer/flow_controller.png)

- **요청 처리** :pushpin: [코드 확인](https://github.com/Integerous/goQuality/blob/b2c5e60761b6308f14eebe98ccdb1949de6c4b99/src/main/java/goQuality/integerous/controller/PostRestController.java#L55)
  - Controller에서는 요청을 화면단에서 넘어온 요청을 받고, Service 계층에 로직 처리를 위임합니다.

- **결과 응답** :pushpin: [코드 확인]()
  - Service 계층에서 넘어온 로직 처리 결과(메세지)를 화면단에 응답해줍니다.

### 4.4. Service

![](https://zuminternet.github.io/images/portal/post/2019-04-22-ZUM-Pilot-integer/flow_service1.png)

- **Http 프로토콜 추가 및 trim()** :pushpin: [코드 확인]()
  - 사용자가 URL 입력 시 Http 프로토콜을 생략하거나 공백을 넣은 경우,  
  올바른 URL이 될 수 있도록 Http 프로토콜을 추가해주고, 공백을 제거해줍니다.

- **URL 접속 확인** :pushpin: [코드 확인]()
  - 화면단에서 모양새만 확인한 URL이 실제 리소스로 연결되는지 HttpUrlConnection으로 테스트합니다.
  - 이 때, 빠른 응답을 위해 Request Method를 GET이 아닌 HEAD를 사용했습니다.
  - (HEAD 메소드는 GET 메소드의 응답 결과의 Body는 가져오지 않고, Header만 확인하기 때문에 GET 메소드에 비해 응답속도가 빠릅니다.)

  ![](https://zuminternet.github.io/images/portal/post/2019-04-22-ZUM-Pilot-integer/flow_service2.png)

- **Jsoup 이미지, 제목 파싱** :pushpin: [코드 확인]()
  - URL 접속 확인결과 유효하면 Jsoup을 사용해서 입력된 URL의 이미지와 제목을 파싱합니다.
  - 이미지는 Open Graphic Tag를 우선적으로 파싱하고, 없을 경우 첫 번째 이미지와 제목을 파싱합니다.
  - 컨텐츠에 이미지가 없을 경우, 미리 설정해둔 기본 이미지를 사용하고, 제목이 없을 경우 생략합니다.


### 4.5. Repository

![](https://zuminternet.github.io/images/portal/post/2019-04-22-ZUM-Pilot-integer/flow_repo.png)

- **컨텐츠 저장** :pushpin: [코드 확인]()
  - URL 유효성 체크와 이미지, 제목 파싱이 끝난 컨텐츠는 DB에 저장합니다.
  - 저장된 컨텐츠는 다시 Repository - Service - Controller를 거쳐 화면단에 송출됩니다.

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

## 6. 회고 / 느낀점
>프로젝트 개발 회고 글: 
