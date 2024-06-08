import styles from '../styles/post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faRepeat, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Post(post,index){
    let navigate = useNavigate();
    post = post.post;
    console.log(post)
    return(
        <div onClick={()=>{
            navigate("/post/details", {
                state:{
                    "post":post
                },replace:false
            })
        }} className={styles.post}>
            <div className={styles.header}>
                <div>
                    <img alt='profile' src={post.author_image} />
                </div>

                <span className={styles.name}>
                    <p>Stream</p>
                    <p>@{post.author_name}</p>
                </span>
            </div>
            <div className={styles.content}>
                <p>{post.content}</p>
                {
                    post.content_image ? <img height={320} alt='content' src={post.content_image} />
                    :
                    null
                }

                {
                    post.url_to_media ? <video height={320} poster={post.url_to_media} controls>
                        <source  src={post.url_to_media} type='video/mp4' />
                    </video>
                    :
                    null
                }
            </div>
            <div className={styles.bottom}>
                <FontAwesomeIcon icon={faThumbsUp}/>
                <FontAwesomeIcon icon={faRepeat}/>
                <FontAwesomeIcon icon={faMessage}/>
                <FontAwesomeIcon icon={faShare}/>
            </div>
        </div>
    )
}