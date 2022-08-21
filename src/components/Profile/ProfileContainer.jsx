import React from "react";
import { connect } from "react-redux";
import {getUserProfile} from "../../redux/Profile-Reduser";
import {AuthRedirect} from "../../hoc/withAuthRedirect"
import Profile from "./Profile";
import { compose } from "redux";


class ProfileContainer extends React.Component{
    
    componentDidMount(){

        let userId = this.props.userId.userId;
        if (userId === ':userId'){
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render(){
        return <Profile {...this.props}/>
    }
}

let AuthRedirectComponent = AuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

/*compose()()*/

export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);