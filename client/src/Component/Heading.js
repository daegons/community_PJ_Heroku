import React from "react";
import { Link, useNavigate } from "react-router-dom";
//bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import firebase from "firebase/compat/app";
import { MdLogin } from "react-icons/md";
import { GrLogout } from "react-icons/gr";

import { BsEmojiSmile, BsEmojiSunglasses } from "react-icons/bs";

import mainImg from "./assets/mainIcon.png";

import lightoff from "./assets/lightoff.svg";
import lighton from "./assets/lighton.svg";
import contentWright from "./assets/contentWright.svg";
import mainLogo from "./assets/mainLogo.svg";
import userEdit from "./assets/userEdit.svg";

const Heading = (props) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(props);
  const logoutHandler = () => {
    alert(`${user.displayName}님 안녕히가세요.`);
    firebase.auth().signOut();
    navigate("/");
  };

  const mainPageMoveHandler = () => {
    navigate("/");
  };
  return (
    <Navbar
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      expand="md"
      variant="white"
    >
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={mainPageMoveHandler}
        >
          <img src={mainLogo} alt="메인 아이콘" width="40px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "'Yeon Sung', cursive",
                marginRight: "10px",
              }}
            >
              home
            </Link> */}
            <br />
            <Link
              to="/upload"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "10px",
                fontFamily: "'Yeon Sung', cursive",
              }}
            >
              <img src={contentWright} alt="글작성" style={{ width: "20px" }} />
            </Link>
            <Link
              to="/subpage"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "10px",
                fontFamily: "'Yeon Sung', cursive",
              }}
            >
              서브페이지
            </Link>
          </Nav>
          <br />
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Link
            style={{
              cursor: "default",
              textDecoration: "none",
              color: "black",
              marginRight: "15px",
              fontFamily: "'Yeon Sung', cursive",
            }}
          >
            {user.displayName && `${user.displayName}님 접속중..`}
          </Link>
          {user.accessToken ? (
            <>
              <br />
              <Navbar.Text
                onClick={() => {}}
                style={{ color: "black", cursor: "pointer" }}
              >
                <Link
                  to="/mypage"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "15px",
                    fontFamily: "'Yeon Sung', cursive",
                  }}
                >
                  <img
                    src={userEdit}
                    alt="마이페이지"
                    style={{ width: "32px" }}
                  />
                </Link>
              </Navbar.Text>
              <br />
              {!props.tab ? (
                <Navbar.Text
                  onClick={() => {}}
                  style={{ color: "black", cursor: "pointer" }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: "15px",
                      fontFamily: "'Yeon Sung', cursive",
                    }}
                    onClick={props.onBlueRightHandler}
                  >
                    {/* <BsEmojiSmile style={{ fontSize: "20px" }} /> */}
                    <img
                      src={lighton}
                      alt="블루스크린 끄기"
                      style={{ width: "32px" }}
                    />
                  </Link>
                </Navbar.Text>
              ) : (
                <Navbar.Text
                  onClick={() => {}}
                  style={{ color: "black", cursor: "pointer" }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: "15px",
                      fontFamily: "'Yeon Sung', cursive",
                    }}
                    onClick={props.onBlueRightHandler}
                  >
                    <img
                      src={lightoff}
                      alt="블루스크린 켜기"
                      style={{ width: "32px" }}
                    />
                  </Link>
                </Navbar.Text>
              )}
              <br />
              <Navbar.Text
                onClick={logoutHandler}
                style={{
                  color: "black",
                  cursor: "pointer",
                  fontFamily: "'Yeon Sung', cursive",
                }}
              >
                <GrLogout style={{ fontSize: "24px" }} />
              </Navbar.Text>
            </>
          ) : (
            <Nav>
              <Navbar.Text>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "'Yeon Sung', cursive",
                  }}
                >
                  <MdLogin style={{ fontSize: "24px" }} />
                </Link>
              </Navbar.Text>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heading;
