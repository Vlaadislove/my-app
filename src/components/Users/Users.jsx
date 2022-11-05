import React from "react";
import axios from "axios";
import usersPhoto from '../../assets/img/users.png'

// {id:1, name: 'Vlad', follow: true, status: "Hello", location:{city: 'Saint Petersburg', country:'Russia'},
//     photoURL:'https://www.youloveit.ru/uploads/posts/2013-11/1384443414_youloveit_ru_kartinki_s_kotom_pusheenom05.png'},
// {id:2, name: 'Stepa', follow: false, status: "Hi-Hi", location:{city: 'Moscow', country:'Russia'},
//     photoURL:'https://www.youloveit.ru/uploads/posts/2013-11/1384443414_youloveit_ru_kartinki_s_kotom_pusheenom05.png'},
// {id:3, name: 'Mark', follow: true, status: "Bay bay", location:{city: 'Kaliningrad', country:'Russia'},
//     photoURL:'https://www.youloveit.ru/uploads/posts/2013-11/1384443414_youloveit_ru_kartinki_s_kotom_pusheenom05.png'}



const Users = (props) => {


    let getUsers =() => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=50')
                .then(response => {props.setUsers(response.data.items)
                    }
                )
        }
    }






    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
        {props.users.map( u =>
            <div>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : usersPhoto } alt=""/>
                </div>
                <div>{u.follow
                    ? <button onClick={()=>{props.unfollowed(u.id)}}>FOLLOW</button>
                    : <button onClick={()=>{props.followed(u.id)}}>UNFOLLOW</button>}
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

export default Users