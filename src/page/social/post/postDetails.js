import { useLocation, useParams } from "react-router-dom"
import styles from '../../../styles/index/postDetails.module.css';
import { Avatar, Divider } from "@mui/material";
import { Comment, Favorite, MoreVertOutlined, Repeat, Share } from "@mui/icons-material";
import { useEffect,useState } from "react";
import { getPost } from "../../../lib/utilities/posts";

export default function PostDetails(){
    /**
     * @type {object}
     */
    let urlParams = useParams();
    let location = useLocation();
    let [post, setPost] = useState(location.state.post);

    useEffect(function(){
        // if(urlParams!=null){
        //     getPost(urlParams["username"],urlParams["postId"]).then((post)=>{
        //         setPost(post)
        //     }).catch((err)=>{
        //         console.log(`Error occured while fetching posts ${err.message}`)
        //     })
        // }else{
        //     setPost(location.state.post);
        // }
    },[])

    return (
        <section>
            <div className={styles.header}>
                <div className={styles.author}>
                    <div className={styles.author_data}>
                        <Avatar src={post.author_image} sizes="medium"/>

                        <div className={styles.authorName}>
                            <span className={styles.name}>{post.name}</span>
                            <span className={styles.username}>{`@${post.username}`}</span>
                        </div>
                    </div>

                    <MoreVertOutlined />
                </div>
                
                <div className={styles.content}>
                    <p>{post['content']}</p>
                    {post.content_image && <img src={post.content_image} />}
                    {post.url_to_media && <video><source/></video>}
                </div>

                <div className={styles.metrics}>
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
                <Divider sx={
                    {
                        bgcolor:'white'
                    }
                }/>
            </div>

            <div>

            </div>
        </section>
    )
}