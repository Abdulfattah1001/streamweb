import { Avatar, ListItem } from "@mui/material";
import styles from '../../styles/index/msgItem.module.css'

/**
 * @param {object} props 
 * @returns {React.Component}
 */
export default function RecentMessageItem(props){
    /**
     * @type {Message}
     */
    const message = props.message;

    return (
        <div className={styles.messageListWrapper}>
            <ListItem sx={
                {
                    width:'100%',
                    padding:'0px'
                }
            }>
                <div className={styles.contentWrapper}>
                    <Avatar />

                    <div className={styles.content}>
                        <span>Abdulfattah</span>
                        <span>last message</span>
                    </div>

                    <span>2hr ago</span>
                </div>
            </ListItem>
        </div>
    )
}