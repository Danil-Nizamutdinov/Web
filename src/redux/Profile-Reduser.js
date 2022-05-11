const addPost = 'ADD-POST';
const onPostChange = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Я гуль', likeCount: '24'},
        {id: 2, message: '1000-7?', likeCount: '12'}
    ],
    newPostText: 'Hi'
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

export default profileReduser;