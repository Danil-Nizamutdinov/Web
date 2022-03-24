import dl from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialog/Dialog';

function Dialogs(props){

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.state.message.map( m =>  <Message message={m.message}/>);

    return(
        <div className={dl.dialogs}>
            <div className={dl.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={dl.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;