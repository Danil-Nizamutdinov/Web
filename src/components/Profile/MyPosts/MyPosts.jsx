import mp from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';


function MyPosts(props){

    let postElement = props.posts.map( p =>  <Post message={p.message} likeCount={p.likeCount}/>)

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    }

    return(
        <div>
            <h3>my posts</h3>
            <div>
                <textarea className={mp.textarea} onChange={onPostChange} value={props.newPostText}/>
                <div>
                    <button className={mp.button} onClick={props.addPost}>Add post</button>
                </div>
            </div>

            {postElement}

        </div>
    );
}

export default MyPosts;