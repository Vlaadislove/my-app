import React from "react";
import axios from "axios";
import usersPhoto from '../../assets/img/users.png'
import s from "./Users.module.css";


// {id:1, name: 'Vlad', follow: true, status: "Hello", location:{city: 'Saint Petersburg', country:'Russia'},
//     photoURL:'https://www.youloveit.ru/uploads/posts/2013-11/1384443414_youloveit_ru_kartinki_s_kotom_pusheenom05.png'},
// {id:2, name: 'Stepa', follow: false, status: "Hi-Hi", location:{city: 'Moscow', country:'Russia'},
//     photoURL:'https://www.youloveit.ru/uploads/posts/2013-11/1384443414_youloveit_ru_kartinki_s_kotom_pusheenom05.png'},
// {id:3, name: 'Mark', follow: true, status: "Bay bay", location:{city: 'Kaliningrad', country:'Russia'},
//     photoURL:'https://www.youloveit.ru/uploads/posts/2013-11/1384443414_youloveit_ru_kartinki_s_kotom_pusheenom05.png'}


class UsersC extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })


    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let page = []
        for (let i = 1; i <= pagesCount; i++) {
            page.push(i)
        }

        let currP = this.props.currentPage
        let currDown = (currP - 5) < 0 ? 0 : currP - 5
        let currUp = currP + 5
        let shortCarousel = page.slice(currDown,currUp)



        const onPageChange = (pageNumber) => {
            this.props.setCurrentPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
        }


        return (
            <div>
                <div className={s.pageNumber}>
                    {shortCarousel.map(p => {
                        return <span onClick={() => {
                            onPageChange(p)
                        }} className={this.props.currentPage === p ? s.selectedPage : undefined}>{p}</span>
                    })}
                </div>
                {this.props.users.map(u =>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto} alt=""/>
                        </div>
                        <div>{u.follow
                            ? <button onClick={() => {
                                this.props.unfollowed(u.id)
                            }}>FOLLOW</button>
                            : <button onClick={() => {
                                this.props.followed(u.id)
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
}

export default UsersC