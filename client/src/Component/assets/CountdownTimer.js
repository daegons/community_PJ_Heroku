import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
// import { useSelector } from "react-redux";

const CountdownTimer = (props) => {
  const [countdown, setCountdown] = useState(props.initialCountdown);

  //   const user = useSelector((state) => state.user);
  //   console.log(user.uid);
  console.log(props);
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div>
      {countdown > 0 && (
        <Card
          bg="light"
          style={{
            width: "40%",
            height: "90px",
            background: "black",
            margin: "auto",
            fontFamily: "'Yeon Sung', cursive",
          }}
        >
          <Card.Header style={{ background: "rgba(37, 83, 210, 0.278)" }}>
            공지
          </Card.Header>
          <Card.Body style={{ background: "rgba(119, 141, 202, 0.164)" }}>
            <Card.Text>비방 욕설 영구 밴</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default CountdownTimer;
