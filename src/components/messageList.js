import { ListItem } from "@mui/material";
import styles from '../styles/messagecompose.module.css';

function SendMessage(message){
    message = message.message
    return (
       <div className={styles.receiveMessage}>
            <div className={styles.msg}>
                <p>{message.content}</p>
            </div>
       </div>
    )
}

function ReceivedMessage(msg){
    msg = msg.message;
    return (
        <div className={styles.outgoingMessage}>
            <div className={styles.msg}>
                <p>{msg.content}</p>
            </div>
        </div>
    )
}

export {
    SendMessage,
    ReceivedMessage
}