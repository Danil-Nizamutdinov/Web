import pf from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props){
    return(
        <div className={`${pf.content} ${pf.item}`}>

            <ProfileInfo/>
            <MyPostsContainer/>

        </div>
    );
}

export default Profile;