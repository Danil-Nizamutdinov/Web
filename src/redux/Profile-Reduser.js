import {usersAPI} from '../api/api';

const addPost = 'ADD-POST';
const onPostChange = 'UPDATE-NEW-POST-TEXT';
const setUser = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Я гуль', likeCount: '24'},
        {id: 2, message: '1000-7?', likeCount: '12'}
    ],
    newPostText: 'Hi',
    profile: null
};

const profileReduser = (state = initialState, action) => {
    
    switch(action.type){
        case 'ADD-POST':
            let newPostText = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: newPostText, likeCount: 0}],
                newPostText: ''
            };         

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        
        case 'SET_USER_PROFILE':
            return{
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPost})
export const onPostChangeActionCreator = (text) => {
    return{
        type: onPostChange,
        newText: text
    };
};
export const setUserProfile = (profile) => ({type: setUser, profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserId(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export default profileReduser;