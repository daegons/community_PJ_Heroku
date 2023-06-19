import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UploadButtonDiv, UploadDiv, UploadForm } from "../../Style/UploadCSS";
import ImageUpload from "./ImageUpload";

const Edit = () => {
  const [postDetil, setPostDetail] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [Image, setImage] = useState("");
  // console.log(postDetil.image);
  //현재 페이지 id 때문..
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params);
  useEffect(() => {
    const body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          setPostDetail(res.data.post);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setTitle(postDetil.title);
    setContent(postDetil.content);
    setImage(postDetil.image);
  }, [postDetil]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      return alert("위 아래 위위 아래 채워주세요");
    }
    let body = {
      title: title,
      content: content,
      //server측에서도 어떤 글이 수정되는지 알아야 하기때문에 postNum추가
      postNum: params.postNum,
      image: Image,
    };

    axios
      .post("/api/post/edit", body)
      .then((res) => {
        if (res.data.success) {
          alert("글 수정이 완료되었습니다.✔");
          navigate(`/post/${params.postNum}`);
        } else {
          alert("글 수정에 실패하였습니다.❌");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onBackHandler = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ImageUpload setImage={setImage} />
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <UploadButtonDiv>
          <button onClick={onBackHandler} className="cancel">
            취소
          </button>
          <button onClick={onSubmitHandler}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default Edit;
