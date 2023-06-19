import axios from "axios";
import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import { useParams } from "react-router-dom";
import Loading from "./../assets/Loading";
import RepleArea from "../Reple/RepleArea";

const PostArea = () => {
  const [postDetil, setPostDetail] = useState({});
  const [loaded, setLoaded] = useState(false);

  const params = useParams();

  useEffect(() => {
    // console.log(params.postNum); //post id값 ex)1
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          setPostDetail(res.data.post);
          setLoaded(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loaded ? (
        <>
          <Detail postDetil={postDetil} />
          <RepleArea postId={postDetil._id} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PostArea;
