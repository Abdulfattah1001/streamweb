import styles from '../styles/post_details.module.css';

import { Avatar } from "@mui/material";

export default function Comment(comment){
    return (
        <div className={styles.contentWrapper}>
            <Avatar />

            <div className={styles.content}>
                <div>
                    <span className={styles.name}>{comment.name}</span>
                </div>

                <div>
                    <span className={styles.comment}>{comment.comment}</span>
                </div>
            </div>
        </div>
    )
}