import { Comment, Favorite, Share,Repeat,MoreVertOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styles from '../../styles/index/postitem.module.css';
import { useNavigate } from "react-router-dom";

export default function PostItem(props){
    /**
     * @field {Post} post
     */
    const post = props.props;
    let navigate = useNavigate();

    const navigateToPostDetails = function(postObject){
        navigate(`/posts/${postObject["post_id"]}`, {
            props: postObject
        })
    }

    return (
        <div className={styles.container}>
            <div onClick={()=>navigateToPostDetails(post)} className={styles.postHeader}>
                <Avatar src={post.author_image} />
                <div className={styles.postAuthor}>
                    <span>{post.author_name}</span>
                    <span>{post.author_username}</span>
                </div>
                <MoreVertOutlined/>
            </div>

            <div className={styles.content}>
                <p>{post.content}</p>
                {post.content_image && <img src={post.content_image} />}
                {post.url_to_media && <video><source/></video>}
            </div>
            
            <div className={styles.postMetrics}>
                <div>
                    <Favorite />
                    <span>100</span>
                </div>

                <div>
                    <Repeat />
                    <span>200</span>
                </div>

                <div>
                    <Comment />
                    <span>300</span>
                </div>

                <div>
                    <Share />
                    <span>400</span>
                </div>


            </div>
        </div>
    )
}