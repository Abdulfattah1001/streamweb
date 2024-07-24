import { ArrowBack } from "@mui/icons-material";
import { List, ListItem } from "@mui/material";
import styles from '../../../styles/index/settings.module.css';

export default function Settings(){
    return (
        <section>
            <header>
                <ArrowBack />
                <div>
                    <span>Settings</span>
                    <span>aminufattah6@gmail.com</span>
                </div>
            </header>

            <div>
                <List className={styles.settingsItem}>
                    <ListItem>
                        <span>Your Account</span>
                    </ListItem>
                    <ListItem>
                        <span>Monitization</span>
                    </ListItem>
                    <ListItem>
                        <span>Creator Sbscription</span>
                    </ListItem>
                    <ListItem>
                        <span>Security and account access</span>
                    </ListItem>
                    <ListItem>
                        <span>Premium</span>
                    </ListItem>
                    <ListItem>
                        <span>Notifications</span>
                    </ListItem>
                    <ListItem>
                        <span>Accessibility, display and languages</span>
                    </ListItem>
                    <ListItem>
                        <span>Log Out</span>
                    </ListItem>
                </List>    
            </div>
        </section>
    )
}