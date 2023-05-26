import styled from "@emotion/styled";
/* font-family: "Yeon Sung", cursive;
font-family: "Nanum Pen Script", cursive; 가장 아래 왼쪽부터 속성을 따름 */
const UploadDiv = styled.div`
  /* width: 100%; */
  height: 100%;
  /* padding-top: 10rem; */
  /* margin-bottom: 1rem; */
  /* background: green; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
  opacity: 0.8;
  #title {
    border-radius: 6px;
    border: 1px solid #c6c6c6;
    margin-bottom: 10px;
    padding: 7px;
    font-family: "Nanum Pen Script";
    &:active,
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 756px) {
    width: 65%;
    /* margin: 20px 0; */
  }

  textarea {
    min-height: 350px;
    resize: none;
    border-radius: 15px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    font-family: "Nanum Pen Script";
    &:active,
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: grey;
      border-radius: 15px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background: #c6c6c6;
      border-radius: 15px;
      /* margin-top: 87px;
      margin-bottom: 87px; */
      box-shadow: inset 0px 0px 5px whitesmoke;
    }
    @media (max-width: 756px) {
      min-height: 280px;
      /* height: 20vh; */
    }
  }
  label {
    font-weight: bold;
    margin-top: 10px;
    font-family: "Yeon Sung", cursive;
  }
`;

const UploadButtonDiv = styled.div`
  /* background: green; */

  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  button {
    height: 20px;
    width: 100%;
    border-radius: 15px;
    padding: 5px 10px;
    background: rgba(85, 181, 205, 0.8);
    color: white;
    border: none;
    font-family: "Yeon Sung", cursive;
    transition: all 0.4s;

    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: rgba(68, 143, 163, 0.9);
      color: white;
      border: none;
    }
    &.cancel {
      margin-right: 10px;
      border-radius: 6px;
      padding: 5px 10px;
      background: rgb(73, 76, 84);
      color: white;
      border: none;
      &:hover {
        background: rgb(35, 37, 41);
        color: white;
        border: none;
      }
    }
    @media (max-width: 756px) {
      width: 95%;
    }
  }
  .square {
    height: 20px;
    width: 100%;
    border-radius: 15px;
    padding: 5px 10px;
    background: rgba(85, 181, 205, 0.8);
    color: white;
    border: none;
    font-family: "Yeon Sung", cursive;
    transition: all 0.4s;

    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      background: rgba(68, 143, 163, 0.9);
      color: white;
      border: none;
      cursor: pointer;
    }
    @media (max-width: 756px) {
      width: 95%;
    }
  }
`;

export { UploadDiv, UploadForm, UploadButtonDiv };
