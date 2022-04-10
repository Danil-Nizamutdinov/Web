import dialogsReduser from './Dialogs-Reduser';
import profileReduser from './Profile-Reduser';

let store = {
    _state:{
        profilePage: {
            posts: [
                {id: 1, message: 'Я гуль', likeCount: '24'},
                {id: 2, message: '1000-7?', likeCount: '12'}
            ],
            newPostText: 'Hi'
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
            ],
            bodyText: 'Hi'
        }
    
    },
    
    _rerender(){
        console.log('render')
    },

    getState(){
      return this._state;
    },

    updateNewPostText(textPostChange){
        this._state.profilePage.newPostText = textPostChange;
        this._rerender(this._state);
        console.log(this._state.profilePage.newPostText)
    },
    
    addPost(){
        let ap = {
            id: 3, message: this._state.profilePage.newPostText, likeCount: 0
        };
        this._state.profilePage.posts.push(ap)
    
        this._rerender(this._state);
        this._state.profilePage.newPostText = '';
    },

    dispatch(action){
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

        this._rerender(this._state);
    },

    subscribe(observer){
        this._rerender = observer;
    }

}

export default store;