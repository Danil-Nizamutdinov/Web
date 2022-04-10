import dl from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialog/Dialog';
import React from 'react';
import {updateMessageTextActionCreator, addMessageActionCreator} from '../../redux/Dialogs-Reduser';

function Dialogs(props){

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.state.message.map( m =>  <Message message={m.message}/>);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageCange = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageTextActionCreator(text))
    }

    return(
        <div className={dl.dialogs}>
            <div className={dl.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={dl.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.state.bodyText} onChange={onMessageCange} className={dl.textarea}/>
                </div>
                <div>
                    <button className={dl.button} onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;