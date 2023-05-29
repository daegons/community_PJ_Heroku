import styled from "@emotion/styled";

const MyPageDiv = styled.div`
  width: 100%;
  height: 100%;
  form {
    height: 100vh;
    width: 100vh;
    margin-top: 2rem;
    width: 50%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background: green; */
    label {
      margin-bottom: 2rem;
      input {
        display: none;
      }
    }
    button {
      border-radius: 15px;
      padding: 5px 10px;
      background-color: black;
      color: white;
      border: 1px solid black;
      margin-top: 10px;
      &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    }
  }
`;

const LoginDiv = styled.div`
  background: rgba(255, 255, 255, 0.755);
  /* height: 100%; */
  min-width: 360px;
  border-radius: 15px;
  form {
    border-radius: 15px;
    width: 100%;
    padding: 20px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
      0px 15px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    label {
      font-weight: bold;
    }
    input {
      border-radius: 10px;
      border: 1px solid #c6c6c6;
      margin-bottom: 10px;
      opacity: 0.9;
      padding: 5px 5px 5px 15px;
      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      border-radius: 15px;
      padding: 5px 10px;
      background: rgba(75, 155, 185, 0.7);
      color: white;
      border: none;
      margin-top: 10px;
      transition: all 0.6s ease;
      &:hover {
        background: rgba(48, 124, 194, 0.8);
        color: white;
        border: none;
      }
    }
    @media (max-width: 756px) {
      width: 100%;
    }
  }
  @media (max-width: 756px) {
    margin-top: 30px;
    min-width: 300px;
    /* margin: 0 auto; */
  }
`;

export { LoginDiv, MyPageDiv };
