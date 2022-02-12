import mp from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(){
    return(
        <div>
            my posts
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>

            <Post message='Я гуль'/>
            <Post message='1000-7?'/>

        </div>
    );
}

export default MyPosts