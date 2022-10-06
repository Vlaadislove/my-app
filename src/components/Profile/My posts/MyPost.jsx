import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
  return <div>
    <div>
      my post
    </div>
    <div>
      <textarea></textarea>
      <button> Add post </button>
    </div>
    <div className={s.post}>
      <Post text = 'Hi, im Vlad' />
      <Post text = 'I learn JS' />
    </div>
  </div>
}

export default MyPost