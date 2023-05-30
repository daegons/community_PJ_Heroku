import styled from "@emotion/styled";

const PostDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  padding-top: 150px;
  margin: 0 auto !important;

  @media (max-width: 756px) {
    width: 90%;
  }
`;

const SpinnerDiv = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const Post = styled.div`
  border-radius: 15px;
  width: 100%;
  height: auto;
  background: white;
  opacity: 0.9;
  padding: 30px 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
    0px 15px 12px rgba(0, 0, 0, 0.1);
  h1 {
    font-weight: bold;
    /* font-family: "Nanum Pen Script", cursive; */
    font-family: "Yeon Sung", cursive;
  }
  p {
    /* background: black; */
  }
  .author {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    p {
      color: darkgrey;
      margin-bottom: 0px;
      margin-left: 10px;
      &.time {
        font-size: 12px;
      }
      &.admin {
        display: flex;
        align-items: center;
      }
    }
    @media (max-width: 756px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .contents {
    /* background: black; */
    margin-top: 20px;
    font-family: "Nanum Pen Script", cursive;
    font-size: 25px;
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  button {
    border-radius: 6px;
    padding: 5px 10px;
    background: rgb(73, 76, 84);
    color: white;
    border: none;
    font-family: "Yeon Sung", cursive;
    transition: all 0.4s;
    &:hover {
      background: rgb(35, 37, 41);
      color: white;
      border: none;
    }
    &.delete {
      margin-left: 10px;
      &:hover {
        background: rgb(35, 37, 41);
        color: white;
      }
    }
  }
`;

export { PostDiv, SpinnerDiv, Post, BtnDiv };
