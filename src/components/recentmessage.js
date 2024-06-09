import { useNavigate } from 'react-router-dom';
import styles from '../styles/recentmsg.module.css';
import { Avatar, ListItemButton, ListItemText, ListSubheader } from "@mui/material"

export default function RecentMessageItem(recentMessage,index){
    let navigate = useNavigate()
    console.log(recentMessage.recentMessage);

    let nav = ()=>{
        navigate("/message/compose",{
            state:{
                "message": recentMessage.recentMessage
            }
        } )
    }


    return (
        <ListItemButton onClick={nav} alignItems='flex-start'>

            <div className={styles.wrapper}>

                <div>
                    <Avatar src={recentMessage.recentMessage.author_foreground} />

                    <div className={styles.content}>
                        <span className={styles.username}>{recentMessage.recentMessage.author_name}</span>
                        <span className={styles.lastmessage}>{recentMessage.recentMessage.content}</span>
                    </div>

                </div>

                <span className={styles.date}>2024-02-01</span>

            </div>

        </ListItemButton>
    )
}