import React from "react";
import us from './Users.module.css'
import * as axios from "axios";
import user from "../../assets/image/user.png";


function Users(props){
    
    let getUserts = () => {
       
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
                console.log(response)
                props.setUsers(response.data.items)
        })
            
    }

    return(
        <div>
            <button className={us.follow} onClick={getUserts}>Add Users</button>
            {
                props.users.map(u =>

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

                        {u.followed ? <button className={us.follow} onClick={ () => {props.unfollow(u.id)} }>follow</button> 
                        : <button className={us.follow} onClick={ () => {props.follow(u.id)} }>unfollow</button>}
                        
                        

                    </div>

                )
            }
        </div>
    );

}

export default Users;