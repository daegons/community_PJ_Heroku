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
import Offcanvas from "react-bootstrap/Offcanvas";

// import { BsEmojiSmile, BsEmojiSunglasses } from "react-icons/bs";

// import mainImg from "./assets/mainIcon.png";

import lightoff from "./assets/lightoff.svg";
import lighton from "./assets/lighton.svg";
import contentWright from "./assets/contentWright.svg";
// import mainLogo from "./assets/mainLogo.svg";
import mainIcon from "./assets/mainIcon.png";
import userEdit from "./assets/userEdit.svg";
import game from "./assets/game.svg";

const Heading = (props) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logoutHandler = () => {
    alert(`${user.displayName}님 안녕히가세요.`);
    firebase.auth().signOut();
    navigate("/");
  };

  const mainPageMoveHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          position: "fixed",
          width: "100%",
          height: "50px",
          zIndex: "2",
        }}
        expand="md"
        variant="white"
        className="mb-3"
      >
        <Container
          fluid
          style={{
            height: "100%",
            position: "absolute",
          }}
        >
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-sm"
            style={{
              border: "none",
            }}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
            style={{
              width: "15vh",
              opacity: "0.9",
            }}
          >
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Navbar.Brand
                  style={{ cursor: "pointer" }}
                  onClick={mainPageMoveHandler}
                >
                  <img src={mainIcon} alt="메인 아이콘" width="30px" />
                </Navbar.Brand>
                <Navbar.Text>
                  <Link
                    to="/upload"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: "10px",
                      fontFamily: "'Yeon Sung', cursive",
                    }}
                  >
                    <img
                      src={contentWright}
                      alt="글작성"
                      style={{ width: "20px", margin: "0px 10px 0px 10px" }}
                    />
                  </Link>
                  <Link
                    to="/subpage"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "'Yeon Sung', cursive",
                      marginRight: "430px",
                    }}
                  >
                    <img src={game} alt="메인 아이콘" width="30px" />
                  </Link>
                  <Link
                    style={{
                      cursor: "default",
                      textDecoration: "none",
                      color: "black",
                      marginRight: "15px",
                      fontFamily: "'Yeon Sung', cursive",
                    }}
                  >
                    {user.accessToken && `${user.displayName}님 접속중..`}
                  </Link>
                  {!props.tab ? (
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
                        src={lighton}
                        alt="블루스크린 끄기"
                        style={{ width: "32px" }}
                      />
                    </Link>
                  ) : (
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
                  )}
                  {user.accessToken ? (
                    <>
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
                          style={{ width: "32px", margin: "0px 8px 0px 8px" }}
                        />
                      </Link>
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
                  )}
                </Navbar.Text>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Heading;
