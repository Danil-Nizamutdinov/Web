import dl from './../Dialogs.module.css';

function Message(props){

    return(
        <div className={dl.message}>{props.message}</div>
    )

}

export default Message;