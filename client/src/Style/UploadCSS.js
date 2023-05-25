import styled from "@emotion/styled";
/* font-family: "Yeon Sung", cursive;
font-family: "Nanum Pen Script", cursive; 가장 아래 왼쪽부터 속성을 따름 */
const UploadDiv = styled.div`
  width: 100%;
<<<<<<< HEAD
  height: 100vh;
  padding-top: 5rem;
  /* margin-bottom: 1rem; */
=======
  height: 793px;
  overflow: hidden;
  margin-top: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
  @media (max-width: 756px) {
    height: 782px;
    overflow: hidden;
  }
>>>>>>> cb23645b76c90af103639e7298830277eacd5398
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  width: 40%;
=======
  max-width: 45%;
>>>>>>> cb23645b76c90af103639e7298830277eacd5398
  margin: 0 auto;
  opacity: 0.8;
  #title {
    border-radius: 6px;
    border: 1px solid #c6c6c6;
    margin-bottom: 10px;
    padding: 10px;
    font-family: "Nanum Pen Script";
    &:active,
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 756px) {
    width: 70%;
  }

  textarea {
    min-height: 350px;
    resize: none;
    border-radius: 6px;
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
  }
  label {
    font-weight: bold;
    margin-top: 10px;
    font-family: "Yeon Sung", cursive;
  }
  @media (max-width: 756px) {
    max-width: 85%;
    /* height: 500px; */
  }
`;

const UploadButtonDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  button {
    border-radius: 6px;
    padding: 5px 10px;
<<<<<<< HEAD
    background: rgba(85, 181, 205, 0.8);
=======
    background: rgba(55, 124, 176, 0.9);
>>>>>>> cb23645b76c90af103639e7298830277eacd5398
    color: white;
    border: none;
    font-family: "Yeon Sung", cursive;
    transition: all 0.4s;
    &:hover {
<<<<<<< HEAD
      background: rgba(68, 143, 163, 0.9);
=======
      background: rgb(37, 81, 114);
>>>>>>> cb23645b76c90af103639e7298830277eacd5398
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
  }
`;

export { UploadDiv, UploadForm, UploadButtonDiv };
