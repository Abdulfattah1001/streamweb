import styles from '../styles/post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faRepeat, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Post(post,index){
    let navigate = useNavigate();
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
                    <img alt='profile' src={post.urlToImage} />
                </div>

                <span className={styles.name}>
                    <p>Stream</p>
                    <p>@{post.author}</p>
                </span>
            </div>
            <div className={styles.content}>
                <p>{post.content}</p>
                <img alt='content' src={post.urlToImage} />
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