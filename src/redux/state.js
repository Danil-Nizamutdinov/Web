import {render} from '../render'

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Я гуль', likeCount: '24'},
            {id: 2, message: '1000-7?', likeCount: '12'}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Viktor'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Kira'}
        ],
        message: [
            {id: 1, message: 'Hi'},
            {id: 1, message: 'Hello World'},
            {id: 1, message: 'Привет я кира'}
        ]
    }

}

export let addPost = (text) => {
    let ap = {
        id: 3, message: text, likeCount: 0
    };
    state.profilePage.posts.push(ap)
    render(state, addPost);
}


export default state;