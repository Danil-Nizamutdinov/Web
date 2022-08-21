import Users from "./Users";
import React from "react";
import {followe, unfollowe, setUsers, page, setUsersTotalCount, toggleIsFetching, followingInProgress, getUsers} from '../../redux/Users-Reduser';
import { connect } from 'react-redux';
import {usersAPI} from '../../api/api';
import Preloader from "../Common/Preloader/Preloader";

class UsersAPIContainer extends React.Component{

    componentDidMount(){

        this.props.getUsers(this.props.currentPage, this.props.usersCount);

    }

    onPageChanged = (p) => {
        
        this.props.page(p)
        this.props.getUsers(p, this.props.usersCount);
        
    }

    render(){
        
        return(
            <>

                {this.props.isFetching ? <Preloader/> : null}

                <Users totalUsersCount={this.props.totalUsersCount} usersCount={this.props.usersCount} 
                onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} users={this.props.users}
                unfollowe={this.props.unfollowe} followe={this.props.followe} 
                followingInProgress={this.props.followingInProgress} followingStatus={this.props.followingStatus}/>

            </>
        )
    }       
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingStatus: state.usersPage.followingStatus
    }
}

/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followeAC(userId)),
        unfollow: (userId) => dispatch(unfolloweAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        page: (p) => dispatch(pageAC(p)),
        setUsersTotalCount: (totalUsersCount) => dispatch(setUsersTotalCountAC(totalUsersCount)),
        toggleIsFetchin: (IsFetching) => dispatch(toggleIsFetchingAC(IsFetching))
    }
}
*/

const UsersContainer = connect(mapStateToProps,{followe,unfollowe,setUsers,page,setUsersTotalCount,toggleIsFetching, followingInProgress, getUsers})(UsersAPIContainer);

export default UsersContainer;