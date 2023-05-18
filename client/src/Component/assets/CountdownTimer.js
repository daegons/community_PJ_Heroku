import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const CountdownTimer = ({ initialCountdown }) => {
  const [countdown, setCountdown] = useState(initialCountdown);

  const user = useSelector((state) => state.user);
  console.log(user.uid);

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
        <Card bg="light" style={{ width: "50%" }}>
          <Card.Header>공지{countdown}</Card.Header>
          <Card.Body>
            <Card.Text>비방 욕설 영구 밴</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default CountdownTimer;
