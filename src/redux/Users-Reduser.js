import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const PAGE = 'PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    totalUsersCount: 0,
    usersCount: 3,   // число пользователей на одной странице
    currentPage: 1, //страница
    isFetching: false,
    followingStatus:[]
};

const usersReduser = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId){
                        return{...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId){
                        return{...u, followed: false}
                    }
                    return u
                })
            }
        
        case SET_USERS:
            
            return{
                ...state,
                users: [...action.users]
            }

        case PAGE:
            return {
                ...state,
                currentPage: action.p
            }
        
        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.count
            }

        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.IsFetching
            }
        
        case FOLLOWING_IN_PROGRESS:
            return{
                ...state,
                followingStatus: action.isFetching ? [...state.followingStatus, action.userId] 
                : state.followingStatus.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

export const followe = (userId) => ({type: FOLLOW, userId})
export const unfollowe = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const page = (p) => ({type: PAGE, p})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (IsFetching) => ({type: TOGGLE_IS_FETCHING, IsFetching})
export const followingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, usersCount) => {
    return (dispatch) => {

        toggleIsFetching(true)

        usersAPI.getUsers(currentPage, usersCount).then( data => {
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}

export default usersReduser;