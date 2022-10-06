import React from 'react';
import MyPost from './My posts/MyPost';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" alt="" />
      </div>
      <div>
        ava
      </div>
      <MyPost />
    </div>
  )
}

export default Profile