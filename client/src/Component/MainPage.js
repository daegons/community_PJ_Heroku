import React, { useEffect, useState } from "react";
import List from "../Component/Post/List";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { GNBDiv, FooterDiv } from "../Style/MainPageCSS.js";
import CountdownTimer from "./assets/CountdownTimer";

// import { FaSearch } from "react-icons/fa";
import searchIcon from "./assets/search2.svg";

import more from "./assets/more.svg";
// import zumzum from "./assets/zumzum.svg";

const MainPage = () => {
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState("최신순");
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

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
        if (res.data.success) {
          //0 ~ 4번째 들고옴 5개
          setPostList([...postList, ...res.data.postList]);
          setSkip(skip + res.data.postList.length);
          if (res.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPostList = () => {
    setSkip(0);
    let body = {
      sort: sort,
      search: search,
      skip: 0,
    };

    axios
      .post("/api/post/list", body)
      .then((res) => {
        // console.log([...res.data.postList]);
        if (res.data.success) {
          //0 ~ 4번째 들고옴 5개
          setPostList([...res.data.postList]);
          setSkip(res.data.postList.length);
          if (res.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostList();
  }, [sort]);

  const SearchHandler = () => {
    getPostList();
  };

  return (
    <div>
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
              if (e.keyCode === 13) SearchHandler();
            }}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
          />
          <button onClick={() => SearchHandler()}>
            {/* <FaSearch /> */}
            <img src={searchIcon} alt="메인 아이콘" />
          </button>
        </div>
        <DropdownButton
          style={{ fontFamily: "'Yeon Sung', cursive" }}
          // variant="outline-secondary"
          // variant="white"
          // variant="secondary"
          title={sort}
        >
          <Dropdown.Item onClick={() => setSort("최신순")}>
            최신순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort("인기순")}>
            인기순
          </Dropdown.Item>
        </DropdownButton>
      </GNBDiv>
      <List postList={postList} />
      {loadMore && (
        <FooterDiv>
          <button
            style={{
              marginBottom: "10vh",
              border: "none",
              background: "rgba(61, 149, 189, 0.579)",
            }}
            onClick={() => getPostLoadMore()}
          >
            <img src={more} alt="더보기" />
          </button>
        </FooterDiv>
      )}
    </div>
  );
};

export default MainPage;
