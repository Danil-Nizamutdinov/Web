import React from "react";
import * as axios from "axios";
import us from './Users.module.css'
import user from "../../assets/image/user.png";

class Users extends React.Component{

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=3').then( response => {
                console.log(response)
                this.props.setUsers(response.data.items)
        })
    }

    render(){

        return(
            <div>
                {
                    this.props.users.map(u =>
    
                        <div key={u.id} className={us.body}>
                            
                            <div className={us.content}>
    
                                <img src={u.photos.small != null ? u.photos.small : user} className={us.ava}/>
    
                                <div className={us.content_info}>
                                    
                                    <div className={us.name}>
                                        <div>{u.name}</div>
                                        <p>{u.status}</p>
                                    </div>
    
                                    <div className={us.city}>
                                        <div>{'u.location.city'}</div>
                                        <div>{'u.location.country'}</div>
                                    </div>
                                </div>
    
                            </div>
    
                            {u.followed ? <button className={us.follow} onClick={ () => {this.props.unfollow(u.id)} }>follow</button> 
                            : <button className={us.follow} onClick={ () => {this.props.follow(u.id)} }>unfollow</button>}
                                                            
                        </div>
    
                    )
                }
            </div>
        );
    }
}

export default Users;