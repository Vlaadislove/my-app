import axios from "axios";




export const userAPI = (currentPage, pageSize ) =>{
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
}