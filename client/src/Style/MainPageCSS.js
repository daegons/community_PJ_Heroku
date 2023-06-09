import styled from "@emotion/styled";

const GNBDiv = styled.div`
  padding-top: 1rem;
  /* padding-bottom: 1px; */
  padding-top: 100px;
  max-width: 650px;
  margin: 0 auto !important;

  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  .search {
    display: grid;
    min-width: 70%;
    grid-template-columns: 8fr 1fr;
    grid-template-rows: auto;

    input {
      padding: 5px 20px;
      border-radius: 15px 0px 0px 15px;
      border: 0.1px solid #c6c6c6;
      height: 100%;
      background-color: white;
      opacity: 0.5;
      &:active,
      &:focus {
        outline: none;
        opacity: 0.7;
      }
    }
    button {
      height: 100%;
      border: 0.1px solid #c6c6c6;
      border-radius: 0px 15px 15px 0px;
      margin-bottom: -1px;
      opacity: 0.7;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.9;
      }
    }
    img {
      width: 20px;
    }
  }

  @media (max-width: 756px) {
    width: 85%;

    .search {
      width: auto;
      input {
        padding: 5px 10px;
        width: 100%;
      }
    }
    .btn {
      font-size: 0.75rem;
      /* margin-left: 1rem; */
    }
  }
`;

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .square {
    width: 21%;
    height: 15px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    /* padding: 5px 10px; */
    font-weight: bold;
    margin-bottom: 10vh;
    border: none;
    background: rgba(61, 149, 189, 0.579);
    @media (max-width: 756px) {
      width: 65%;
    }
  }
`;

export { GNBDiv, FooterDiv };
