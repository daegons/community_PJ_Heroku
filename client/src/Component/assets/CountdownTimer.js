import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { IoIosMegaphone } from "react-icons/io";
import { useSelector } from "react-redux";

const CountdownTimer = ({ initialCountdown }) => {
  const [countdown, setCountdown] = useState(initialCountdown);

  const user = useSelector((state) => state.user);
  // console.log(user.uid);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <>
      {countdown > 0 && user.uid ? (
        <Card
          bg="light"
          style={{
            width: "60vh",
            height: "85px",
            margin: "auto",
            marginTop: "70px",
            marginBottom: "-60px",
            fontFamily: "'Yeon Sung', cursive",
          }}
        >
          <Card.Header style={{ background: "rgba(37, 83, 210, 0.8)" }}>
            <IoIosMegaphone /> 공지
          </Card.Header>
          <Card.Body style={{ background: "rgba(119, 141, 202, 0.164)" }}>
            <Card.Text>비방 욕설 영구 밴</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default CountdownTimer;
