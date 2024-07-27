import { Assistant, Home, Logout,Message,Notifications,Podcasts,PolicyOutlined,SchoolOutlined, Settings } from "@mui/icons-material";
import { Avatar, createTheme } from "@mui/material";
import styles from '../../styles/index/navbar.module.css';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";

export default function AndroidNavBar(props){
    let user = props.props;
    let navigate = useNavigate();

    return (
        <section className={styles.navSection}>
            <div className={styles.navHeader}>
                <Avatar />
                <div>
                    <span>aminufattah6@gmail.com</span>
                    <span>Ameen Abdulfattah</span>
                </div>
            </div>
            <div className={styles.navList}>
                <ul>
                    <li> <Home color="primary"/><span>Home</span></li>
                    <li> <Message /> <span>Message</span></li>
                    <li> <Notifications /> <span>Notifications</span></li>
                    <li> <PolicyOutlined /> <span>Policy Privacy</span></li>
                    {/* <li><span>Academics</span></li> */}
                    <li> <Settings /> <span>Settings</span></li>
                    <li> <Podcasts /> <span>Podcast</span></li>
                    <li> <Assistant /> <span>StreamAI</span></li>
                    <li> <Assistant /> <span>Dictionary</span></li>
                    <li> <Logout/> <span>Log Out</span></li>
                </ul>
            </div>
        </section>
    )
}