import Dialogs from './Dialogs';
import {updateMessageTextActionCreator, addMessageActionCreator} from '../../redux/Dialogs-Reduser';
import { connect } from 'react-redux';
import {AuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),

        onMessageCang: (text) => dispatch(updateMessageTextActionCreator(text))

    }
}

let AuthRedirectComponent = AuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;