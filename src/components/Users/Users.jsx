import React from "react";
import us from './Users.module.css'
import user from "../../assets/image/user.png";
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

function Users(props){

    let pagesCount = Math.ceil( props.totalUsersCount / props.usersCount)

        let pages = []
        
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);            
        }



    return(
        <div>

                <div>

                    {
                        pages.map(n => {
                            return <span onClick={ () => props.onPageChanged(n)} 
                            className={`${n === props.currentPage ? us.page_num_active : us.page_num}`} >{n}</span>
                        })
                    }

                </div>
    
                {
                    props.users.map(u =>
    
                        <div key={u.id} className={us.body}>
                            
                            <div className={us.content}>

                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : user} className={us.ava}/>
                                </NavLink>
    
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
    
                            {u.followed ? <button className={us.follow} disabled={props.followingStatus.some(id => id === u.id)} onClick={ () => {
                                props.followingInProgress(true, u.id)
                                usersAPI.unfollow(u.id).then(resultCode => {
                                    if (resultCode === 0){
                                        props.unfollowe(u.id)
                                    }
                                    props.followingInProgress(false, u.id)
                                })

                            } }>unfollow</button> 

                            : <button className={us.follow} disabled={props.followingStatus.some(id => id === u.id)} onClick={ () => {  
                                props.followingInProgress(true, u.id)
                                usersAPI.follow(u.id).then(resultCode => {
                                    if (resultCode === 0){
                                        props.followe(u.id)
                                    }
                                    props.followingInProgress(false, u.id)
                                })

                            } }>follow</button>}
                                                            
                        </div>
    
                    )
                }
            </div>
    )
}

export default Users;