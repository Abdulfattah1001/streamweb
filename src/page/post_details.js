import styles from '../styles/post_details.module.css';
import Post from '../components/post';
import Comment from '../components/comments';
import { useLocation } from 'react-router-dom';

export default function PostDetails(post_object, index){
    const post_obj = useLocation();
    let comment = [
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
        {"name":"Ameen Abdulfattah","comment":"That's good news for us",},
    ]
    return (
        <section className={styles.body}>
            <div className={styles.leftBody}></div>

           <div className={styles.mainBody}>

           <div className={styles.postHeader}>
                {
                    Post(post_obj.state.post, 1)
                }
            </div>

            <div className={styles.commentwrapper}>
                {
                    comment.map(function(comment,index){
                        return Comment(comment);
                    })
                }
            </div>

           </div>

            <div className={styles.rightBody}></div>
        </section>
    )
}