import mp from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from '../../../redux/Profile-Reduser'


function MyPosts(props){

    let postElement = props.posts
        .map( p =>  <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {    
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text))
    }

    return(
        <div>
            my posts
            <div>
                <textarea className={mp.textarea} ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <div>
                    <button className={mp.button} onClick={addPost}>Add post</button>
                </div>
            </div>

            {postElement}

        </div>
    );
}

export default MyPosts