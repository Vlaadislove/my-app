import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://w7.pngwing.com/pngs/7/51/png-transparent-computer-icons-user-avatar-avatar-chat-logo-online-chat-silhouette.png"
        alt=""
      />
      {props.text}
      <div>Like:{props.like}</div>
    </div>
  );
};

export default Post;
