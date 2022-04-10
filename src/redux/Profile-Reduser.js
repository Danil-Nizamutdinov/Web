const addPost = 'ADD-POST';
const onPostChange = 'UPDATE-NEW-POST-TEXT';

const profileReduser = (state, action) => {
    
    if (action.type === 'ADD-POST') {
        let ap = {
            id: 3, message: state.newPostText, likeCount: 0
        };
        state.posts.push(ap)
    
        state.newPostText = '';
    }else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;

        console.log(state.newPostText)
    }

    return state;
}

export const addPostActionCreator = () => ({type: addPost})
export const onPostChangeActionCreator = (text) => {
    return{
        type: onPostChange,
        newText: text
    };
};

export default profileReduser;