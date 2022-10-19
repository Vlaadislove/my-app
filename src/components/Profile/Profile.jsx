import React from 'react';
import MyPost from './My posts/MyPost';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost post={props.state.post} addPost={props.addPost}/>
        </div>
    )
}

export default Profile