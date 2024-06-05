import styles from '../styles/post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faRepeat, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Post(post,index){
    return(
        <div className={styles.post}>
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