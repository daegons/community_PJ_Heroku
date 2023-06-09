import React, { useEffect, useState } from "react";
import List from "../Component/Post/List";
import axios from "axios";
import { GNBDiv, FooterDiv } from "../Style/MainPageCSS.js";
import CountdownTimer from "./assets/CountdownTimer";
import Loading from "./assets/Loading";

import searchIcon from "./assets/search2.svg";

import more from "./assets/more.svg";
import { Button } from "react-bootstrap";

import { motion } from "framer-motion";

const MainPage = () => {
  //배열로 받아야해서 ([])넣어줌
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState("최신글");
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  const [loading, setLoading] = useState(false);

  // console.log(postList);

  const getPostLoadMore = () => {
    let body = {
      sort: sort,
      search: search,
      skip: skip,
    };

    axios
      .post("/api/post/list", body)
      .then((res) => {
        // console.log([...res.data.postList]);
        console.log("postList length", res.data.postList.length);
        console.log("skip", skip);
        if (res.data.success) {
          //0 ~ 4번째 들고옴 5개
          setPostList([...postList, ...res.data.postList]);
          setSkip(skip + res.data.postList.length);
          if (res.data.postList.length < 5) {
            setLoadMore(false);
          }
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listChange = () => {
    setSkip(0);
    let body = {
      sort: sort,
      search: search,
      skip: 0,
    };

    axios
      .post("/api/post/list", body)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          //0 ~ 4번째 들고옴 5개
          setPostList([...res.data.postList]);
          setSkip(res.data.postList.length);
          if (res.data.postList.length < 5) {
            setLoadMore(false);
          }
          if (res.data.postList.length === 0) {
            setLoadMore(false);
          }
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //sort가 바뀔 때마다 listChange 함수 실행
  useEffect(() => {
    listChange();
  }, [sort]);

  const SearchHandler = () => {
    listChange();
  };

  const listChangeHandler = (e) => {
    e.preventDefault();
    sort === "최신글" ? setSort("인기글") : setSort("최신글");
  };

  return (
    <>
      {loading ? (
        <>
          {/* 카운트 공지 */}
          <CountdownTimer initialCountdown={1} />
          <GNBDiv>
            <div className="search">
              <input
                style={{ fontFamily: "'Yeon Sung', cursive" }}
                placeholder="찾고 싶은 내용.."
                type="text"
                value={search}
                onKeyDown={(e) => {
                  e.keyCode === 13 && SearchHandler();
                }}
                onChange={(e) => {
                  setSearch(e.currentTarget.value);
                }}
              />
              <button onClick={SearchHandler}>
                <img src={searchIcon} alt="메인 아이콘" />
              </button>
            </div>
            <Button
              style={{
                fontFamily: "'Yeon Sung', cursive",
                width: "20%",
                background: "rgba(26, 96, 158, 0.755)",
                border: "none",
              }}
              // title={sort}
              onClick={listChangeHandler}
            >
              {sort}
            </Button>
          </GNBDiv>
          <List postList={postList} />
          {loadMore && (
            <FooterDiv>
              <motion.button
                className="square"
                whileHover={{ scaleX: 1.2 }}
                onClick={getPostLoadMore}
              >
                <img src={more} alt="더보기" />
              </motion.button>
            </FooterDiv>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MainPage;
