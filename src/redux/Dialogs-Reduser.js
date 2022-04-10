const dialogsReduser = (state, action) => {
    
    if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.bodyText = action.newBodyText;
    }else if (action.type === 'ADD-MESSAGE') {
        let newMessage = {
            id: 3, message: state.bodyText
        };
        state.message.push(newMessage);
        state.bodyText = '';
        console.log(state.message)
    }
    
    return state;
}

export const updateMessageTextActionCreator = (text) => {
    return{
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newBodyText: text
    }
};
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})

export default dialogsReduser;