const express = require("express");
const router = express.Router();

const { Counter } = require("../Model/Counter");
const { User } = require("../Model/User");
const setUpload = require("../Util/upload");

router.post("/register", (req, res) => {
  // console.log(tmep);
  //클라쪽에서 요청보낸 것들(tmep)유저 displayName,email,uid,photoUR
  let tmep = req.body;
  //클라쪽에서 tmep 데이터 받아서 mongoDB user에 저장 작업
  Counter.findOne({ name: "counter" })
    .then((doc) => {
      tmep.userNum = doc.userNum;
      //객채 생성후 요청받은 데이터 넣어주고
      const userData = new User(req.body);
      console.log(userData);
      userData.save().then(() => {
        //userData 저장 후 counter 1씩 증가시킴
        Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } }).then(
          (doc) => {
            res.status(200).json({ success: true, doc });
          }
        );
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

router.post("/namecheck", (req, res) => {
  User.findOne({ displayName: req.body.displayName })
    .exec()
    .then((doc) => {
      let check = true;
      if (doc) {
        check = false;
      }
      res.status(200).json({ success: true, check });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

router.post(
  "/profile/image",
  setUpload("react-project/user"),
  (req, res, next) => {
    res.status(200).json({ success: true, filePath: res.req.file.location });
  }
);

router.post("/profile/update", (req, res) => {
  let temp = {
    photoURL: req.body.photoURL,
  };
  User.updateOne({ uid: req.body.uid }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;
