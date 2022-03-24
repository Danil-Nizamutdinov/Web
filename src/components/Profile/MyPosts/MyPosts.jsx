import mp from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';

function MyPosts(props){

    let postElement = props.posts
        .map( p =>  <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return(
        <div>
            my posts
            <div>
                <textarea className={mp.textarea} ref={newPostElement}></textarea>
                <div>
                    <button className={mp.button} onClick={addPost}>Add post</button>
                </div>
            </div>

            {postElement}

        </div>
    );
}

export default MyPosts