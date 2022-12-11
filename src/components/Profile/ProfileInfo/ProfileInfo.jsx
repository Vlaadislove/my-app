import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import usersPhoto from "../../../assets/img/users.png";
import ProfileStatus from "./ProfileStatus";
import ProfileAvatar from "./ProfileAvatar";

const ProfileInfo = (props) => {
  console.log("PROFILE_INFO: ", props);

  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : usersPhoto
            }
            alt=""
          />
        </div>
        <ProfileStatus
          status={props.status}
          updateStatusThunk={props.updateStatusThunk}
        />
        <ProfileAvatar />
        <div className={s.fullName}>{props.profile.fullName}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>
          {props.profile.lookingForAJob ? (
            <div>Работаю</div>
          ) : (
            <div>Не работаю</div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
