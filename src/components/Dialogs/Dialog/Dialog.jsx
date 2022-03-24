import dl from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function DialogItem(props){

    let path = '/dialogs/' + props.id;

    return(
        <div>
            <NavLink to={path} className={dl.dialog}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;