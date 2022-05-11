let initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {

    switch(action.type){
        case 'UPDATE-NEW-MESSAGE-TEXT':

            return {
                ...state,
                bodyText: action.newBodyText
            };

        case 'ADD-MESSAGE': 
            let bodyText = state.bodyText;
            return {
                ...state,
                message: [...state.message, {id: 3, message: bodyText}],
                bodyText: ''
            };
    
        default:
            return state;

    }
}

export const updateMessageTextActionCreator = (text) => {
    return{
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newBodyText: text
    }
};
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})

export default dialogsReduser;