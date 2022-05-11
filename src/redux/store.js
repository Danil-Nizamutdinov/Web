import {createStore, combineReducers} from 'redux';
import dialogsReduser from './Dialogs-Reduser';
import profileReduser from './Profile-Reduser';
import usersReduser from './Users-Reduser';


let state = combineReducers({
    dialogsPage: dialogsReduser,
    profilePage: profileReduser,
    usersPage: usersReduser
});

let store = createStore(state);

console.log(store.getState());

export default store;