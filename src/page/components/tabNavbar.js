import { Home, Logout, Message, NotificationAdd, SchoolOutlined, Settings } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styles from '../../styles/index/tabletNav.module.css';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";

export default function TabletNavBar(){
    let navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <Avatar />
                <div>
                    <span>Name goes here</span>
                    <span>email goes here</span>
                </div>
            </div>

            <div className={styles.items}>
                <ul>
                    <li><button onClick={()=>navigate("/home")}><Home /> <span>Home</span></button></li>
                    <li><button onClick={()=>navigate("/message")}><Message /> <span>Message</span></button></li>
                    <li><button onClick={()=>navigate("/notification")}><NotificationAdd /><span>Notification</span></button></li>
                    <li><button onClick={()=>navigate("/academics")}><SchoolOutlined /> <span>Academics</span></button></li>
                    <li><button onClick={()=>navigate("/settings")}><Settings /><span>Settings</span></button></li>
                    <li><button onClick={()=>auth.signOut().then(()=>navigate('/'))}><Logout /> <span>Log Out</span></button></li>
                </ul>
            </div>

            <div>
                <span>Stream v0.0.1</span>
            </div>
        </div>
    )
}
