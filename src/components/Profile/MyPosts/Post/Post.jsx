import p from './Post.module.css'

function Post(props){
    return(
        <div className={p.item}>
            <img src="https://i.pinimg.com/originals/56/0f/fb/560ffb1c8649f4069d747d3bc56010d3.jpg" alt=""/>
            {props.message}
            <div>
                <span>Like</span>
                {props.likeCount}
            </div>
        </div>
    );
}

export default Post