import React from "react";
import usersPhoto from '../../assets/img/users.png'
import  s from './Users.module.css'
import preloader from '../../assets/img/preloader.gif'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize)

    let page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    let currP = props.currentPage
    let currDown = (currP - 5) < 0 ? 0 : currP - 5
    let currUp = currP + 5
    let shortCarousel = page.slice(currDown,currUp)

    return (
        <div>
            <div className={s.pageNumber}>
                {shortCarousel.map(p => {
                    return <span onClick={() => {
                        props.onPageChange(p)
                    }} className={props.currentPage === p ? s.selectedPage : undefined}>{p}</span>
                })}
            </div>
            {props.users.map(u =>
                <div>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : usersPhoto} alt=""/>
                    </div>
                    <div>{u.follow
                        ? <button onClick={() => {
                            props.unfollowed(u.id)
                        }}>FOLLOW</button>
                        : <button onClick={() => {
                            props.followed(u.id)
                        }}>UNFOLLOW</button>}
                    </div>
                    <div>
                        Name: {u.name}
                    </div>
                    <div>
                        Status: {u.status}
                    </div>

                    <div>
                        <div>Country: {'u.location.country'}</div>
                        <div>City: {'u.location.city'}</div>
                    </div>

                </div>)}
        </div>
    )
}


export  default  Users