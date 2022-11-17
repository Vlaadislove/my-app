import React from "react";
import usersPhoto from "../../assets/img/users.png";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let page = [];
  for (let i = 1; i <= pagesCount; i++) {
    page.push(i);
  }

  let currP = props.currentPage;
  let currDown = currP - 5 < 0 ? 0 : currP - 5;
  let currUp = currP + 30;
  let shortCarousel = page.slice(currDown, currUp);

  return (
    <div>
      <div className={s.pageNumber}>
        {shortCarousel.map((p) => {
          return (
            <span
              onClick={() => {
                props.onPageChange(p);
              }}
              className={props.currentPage === p ? s.selectedPage : undefined}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : usersPhoto}
                alt=""
              />
            </NavLink>
          </div>
          <div>
            {u.followed ? (
              <button
                onClick={() => {

                  axios
                      .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {'API-KEY' : '059e6886-8406-415a-89a3-61b4ecd478eb'}
                          }
                      )
                      .then((response) => {
                        console.log('UNFOLLOW:',response.data)
                        if(response.data.resultCode === 0){
                          props.unfollowed(u.id)
                        }
                      });
                }}
              >
                FOLLOW
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                      .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                          {
                            withCredentials: true,
                            headers: {'API-KEY' : '059e6886-8406-415a-89a3-61b4ecd478eb'}
                          }
                      )
                      .then((response) => {
                        console.log('FOLLOW:',response.data)
                        if(response.data.resultCode === 0){
                          props.followed(u.id);
                        }
                      });


                }}
              >
                UNFOLLOW
              </button>
            )}
          </div>
          <div>Name: {u.name}</div>
          <div>Status: {u.status}</div>

          <div>
            <div>Country: {"u.location.country"}</div>
            <div>City: {"u.location.city"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
