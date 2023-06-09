import React, { useState } from "react";
// import ReactPlayer from "react-player";
import { SubPageDiv } from "../../Style/SubPageCSS";

//모션
import { motion } from "framer-motion";
//축구배경
import soccor from "../assets/soccor.png";
import ball from "../assets/ball.svg";
import player from "../assets/player.svg";
import soccerPlace from "../assets/soccerPlace.jpg";
import Loading from "../assets/Loading";
const SubPage = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  return (
    <>
      {loading ? (
        <SubPageDiv>
          <img id="place" src={soccerPlace} alt="축구장 이미지" />
          <img src={soccor} alt="축구장 이미지" />
          {/* <ReactPlayer
        url={"https://youtu.be/UxpjpxLi-Qg"}
        width="100%"
        height="100%"
        loop={true}
        playing={true}
        muted={true}
        controls={false}
        style={{ pointerEvents: "none" }}
      /> */}
          <motion.div
            drag
            dragConstraints={{
              top: -260,
              left: -150,
              right: 150,
              bottom: 250,
            }}
            style={{
              height: "30px",
              width: "30px",
              position: "absolute",
              cursor: "grab",
            }}
          >
            <img src={ball} alt="축구공 이미지" style={{ height: "100%" }} />
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            style={{
              height: "45px",
              width: "45px",
              position: "absolute",
              top: "12%",
            }}
          >
            <img src={player} alt="키퍼 이미지" style={{ height: "100%" }} />
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -150,
              left: -150,
              right: 150,
              bottom: 350,
            }}
            style={{
              height: "45px",
              width: "45px",
              position: "absolute",
              top: "30%",
            }}
          >
            <img src={player} alt="선수1 이미지" style={{ height: "100%" }} />
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -250,
              left: -150,
              right: 150,
              bottom: 150,
            }}
            style={{
              height: "45px",
              width: "45px",
              position: "absolute",
              top: "60%",
            }}
          >
            <img src={player} alt="선수2 이미지" style={{ height: "100%" }} />
          </motion.div>
        </SubPageDiv>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SubPage;
