import styled from "@emotion/styled";

const ListDiv = styled.div`
  padding-bottom: 1rem;
  max-width: 650px;
  margin: 0 auto !important;

  @media (max-width: 756px) {
    width: 82%;
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background: white;
  margin-top: 2vh;
  margin-bottom: 5vh;
  padding: 20px;
  border-radius: 15px;
  opacity: 0.9;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
    0px 15px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.02);
  }
  .title {
    margin-bottom: 10px;
  }
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin-left: 10px;
        margin-bottom: 0px;
        &.admin {
          display: flex;
          align-items: center;
        }
      }
    }
    p {
      color: darkgrey;
      margin-bottom: 0px;
      &.time {
        font-size: 12px;
      }
    }
  }
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
    }
  }
`;

export { ListDiv, ListItem };
