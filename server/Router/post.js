const express = require("express");

const router = express.Router();

const { Post } = require("../Model/Post");
const { Counter } = require("../Model/Counter");
const { User } = require("../Model/User");

const setUpload = require("../Util/upload");

router.post("/submit", (req, res) => {
  //temp에 title,content 들어있음..
  // console.log(req.body);
  let temp = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  //findOne({ 중괄호로 조건부여 가능 })
  //find쓰면 undifined 뜸..
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum;
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.author = userInfo._id;
          const CommunityPost = new Post(temp);
          CommunityPost.save().then(() => {
            //counter 1증가
            Counter.updateOne(
              { name: "counter" },
              { $inc: { postNum: 1 } }
            ).then(() => {
              res.status(200).json({ success: true });
            });
          });
        });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
      console.log(err);
    });
});

router.post("/list", (req, res) => {
  //자료형 선언
  let sort = {};

  if (req.body.sort === "최신글") {
    sort.createdAt = -1;
  } else {
    //인기글
    sort.repleNum = -1;
  }
  //몽고DB에서 doc찾는 방법은 find()
  Post.find({
    //제목이나 내용 둘중 하나에만 걸려도 return으로 $or사용
    $or: [
      //post DB에 있는 title, content추적
      ////$regex = cient에서 search 값이 포함 되는 데이터 찾아줍니다.
      { title: { $regex: req.body.search } },
      { content: { $regex: req.body.search } },
    ],
  })
    .populate("author")
    .sort(sort)
    //skip초기값 0이라 0~4까지 찾고
    //이후에는 skip + res.data.postList.length기 때문에 5부터 5개를 찾습니다.
    .skip(req.body.skip)
    .limit(5) //한번에 찾을 doc의 숫자
    .exec()
    .then((doc) => {
      // console.log(doc);
      //응답으로 postList: doc로  클라 쪽으로 보냄
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
      console.log(err);
    });
});

router.post("/detail", (req, res) => {
  // console.log(req.body.postNum); //post id 출력
  // 스트링으로 넘어오기때문에 Number로 감싸줌
  Post.findOne({ postNum: Number(req.body.postNum) })
    .populate("author")
    .exec()
    .then((doc) => {
      // console.log(doc);
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
      console.log(err);
    });
});

router.post("/edit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  // console.log(req.body.postNum); //post id 출력
  //쿼리문의 $set을 사용해서 수정된 정보로 교체
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/delete", (req, res) => {
  // console.log(req.body.postNum); //post id 출력
  //몽고DB에서 하나 찾아서 삭제하는 deleteOne
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(() => {
      res.status(400).json({ success: false });
    });
});

//img올리는 과정은 setUpload()에서 진행
//setUpload()에 인자로 이름 주기로 함
router.post(
  "/image/upload",
  //주의사항 폴더를 가서 만들어줘야 합니다.
  setUpload("react-project/post"),
  (req, res, next) => {
    res.status(200).json({ success: true, filePath: res.req.file.location });
  }
);

module.exports = router;
