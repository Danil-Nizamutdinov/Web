import * as axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3d86c1c3-3e7d-46f1-adaf-d6b2e9a9e828'
    }
});

export const usersAPI = {
    getUsers(page = 1, usersCount = 3){
        return instans.get(`users?page=${page}&count=${usersCount}`).then(response => response.data)
    },
    getUserId(userId=2){
        return instans.get(`profile/${userId}`).then(response => response.data)
    },
    follow(userId){
        return instans.post(`follow/${userId}`).then(response => response.data.resultCode)
    },
    unfollow(userId){
        return instans.delete(`follow/${userId}`).then(response => response.data.resultCode)
    }
}

export const authAPI = {
    me(){
       return instans.get('auth/me')
    }
}


