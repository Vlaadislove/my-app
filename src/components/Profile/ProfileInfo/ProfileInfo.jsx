import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import usersPhoto from "../../../assets/img/users.png";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
    <div>
      {/*<div>*/}
      {/*  <img src="https://klike.net/uploads/posts/2019-05/medium/1559021804_2.jpg" alt="bugati" />*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
          <div><img src={props.profile.photos.large != null ? props.profile.photos.large : usersPhoto} alt=""/></div>
          <div>{props.profile.fullName}</div>
          <div>{props.profile.lookingForAJobDescription}</div>
          <div>{props.profile.lookingForAJob ? <div>Работаю</div> : <div>Не работаю</div>}</div>
          <div></div>
      </div>
    </div>
  )
}

export default ProfileInfo