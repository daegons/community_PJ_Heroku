const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
  {
    reple: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    //reple이 어떤 post에 속해있는지 알기 위해서 추가
    postId: {
      // reple에서 게시글 정보 가져올 필요 없어서 ref 설정 안함
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { collection: "reples", timestamps: true }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };
