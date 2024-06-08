import styles from '../styles/recentmsg.module.css';
import { Avatar, ListItemButton, ListItemText, ListSubheader } from "@mui/material"

export default function RecentMessageItem(recentMessage,index){
    return (
        <ListItemButton alignItems='flex-start'>

            <div className={styles.wrapper}>

                <div>
                    <Avatar />

                    <div className={styles.content}>
                        <span className={styles.username}>{recentMessage.name}</span>
                        <span className={styles.lastmessage}>{recentMessage.lastMessage}</span>
                    </div>

                </div>

                <span className={styles.date}>{recentMessage.date}</span>

            </div>

        </ListItemButton>
    )
}