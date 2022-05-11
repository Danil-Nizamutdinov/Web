import Dialogs from './Dialogs';
import {updateMessageTextActionCreator, addMessageActionCreator} from '../../redux/Dialogs-Reduser';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        state:state.dialogsPage

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),

        onMessageCang: (text) => dispatch(updateMessageTextActionCreator(text))

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;