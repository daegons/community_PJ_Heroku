import styled from "@emotion/styled";

const SubPageDiv = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  /* background-image: url("../Component/assets/soccerPlace.jpg"); */
  /* flex-direction: column-reverse; */
  /* -----------------------------------*/
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  //이미지 드래그 못하게 설정
  img {
    height: 85%;
    border-radius: 15px;
    position: absolute;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    -user-drag: none;
  }
  #place {
    width: 100%;
    height: 100%;
    border-radius: 0;
    z-index: -1;
  }
`;

export { SubPageDiv };
