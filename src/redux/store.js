import {createStore, combineReducers, applyMiddleware} from 'redux';
import dialogsReduser from './Dialogs-Reduser';
import profileReduser from './Profile-Reduser';
import usersReduser from './Users-Reduser';
import authReduser from './Auth-Reduser';
import thunkMiddleware from 'redux-thunk';


let state = combineReducers({
    dialogsPage: dialogsReduser,
    profilePage: profileReduser,
    usersPage: usersReduser,
    auth: authReduser
});

let store = createStore(state, applyMiddleware(thunkMiddleware));

console.log(store.getState());

export default store;