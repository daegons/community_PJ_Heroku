const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    //댓글 갯수를 알기 위해서 repleNum 추가
    repleNum: {
      type: Number,
      default: 0,
    },
  },
  { collection: "posts", timestamps: true }
);
const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
