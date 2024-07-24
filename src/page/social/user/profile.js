import { ArrowBack, MoreVertOutlined, SearchOutlined } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import styles from '../../../styles/index/profile.module.css';

export default function UserProfile(user){
    return (
        <section>
            <header>
                <div className={styles.userAuthor}>
                    <ArrowBack />
                    <p>
                        <span>aminu abdulfattah</span>
                        <span>81 posts</span>
                    </p>
                </div>

                <div className={styles.action}>
                    <SearchOutlined />
                    <MoreVertOutlined />
                </div>
            </header>

            <div className={styles.content}>
                <div className={styles.userDetails}>
                    <div className={styles.userImages}>
                        <Avatar sx={{marginLeft:'10px'}}/>
                    </div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.userNames}>

                        <div className={styles.editBtn}>
                        <Button sx={{
                            background:'blue',
                            color:'black',
                            fontWeight:'bold'
                        }}><span>Edit Profile</span></Button>
                        </div>
                        <ul>
                            <li>Ameen Abdulfattah</li>
                            <li>aminufattah6@gmail.com</li>
                            <li>My name is Ameen Abdulfattah, the CEO at Stream and also the lead developer </li>
                            <li>Follower: 1 </li>
                            <li>Following: 2 </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p>Post content goes here</p>
                </div>
            </div>
        </section>
    )
}