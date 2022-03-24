import pf from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props){
    return(
        <div className={`${pf.content} ${pf.item}`}>

            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>

        </div>
    );
}

export default Profile;