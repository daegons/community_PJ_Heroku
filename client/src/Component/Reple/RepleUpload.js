import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RepleUploadDiv } from "../../Style/RepleCSS.js";
import axios from "axios";

const RepleUpload = (props) => {
  //console.log(props); postId:"646ee79b9124f40dc91244ee"

  const [reple, setReple] = useState("");

  const user = useSelector((state) => state.user);
  console.log(user);
  const submitHandler = (e) => {
    e.preventDefault();

    if (reple === "") {
      return alert("댓글 내용을 채워주세요.");
    }
    let body = {
      reple: reple,
      uid: user.uid,
      postId: props.postId,
    };

    axios.post("/api/reple/submit", body).then((res) => {
      if (res.data.success) {
        alert("댓글 작성이 성공하였습니다.");
        window.location.reload();
      } else {
        alert("댓글 작성에 실패하였습니다.");
      }
    });
  };

  return (
    <RepleUploadDiv>
      <form>
        <input
          type="text"
          value={reple}
          onChange={(e) => {
            setReple(e.currentTarget.value);
          }}
        />
        <button onClick={submitHandler}>등록</button>
      </form>
    </RepleUploadDiv>
  );
};

export default RepleUpload;
