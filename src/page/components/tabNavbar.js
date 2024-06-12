import { Home, Logout, Message, NotificationAdd, SchoolOutlined, Settings } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styles from '../../styles/navbar.module.css';

export default function TabletNavBar(){
    return (
        <div>
            <div>
                <Avatar />
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div>
                <ul>
                    <li><button><Home /> Home</button></li>
                    <li><button><Message /> Message</button></li>
                    <li><button><NotificationAdd /> Notification</button></li>
                    <li><button><SchoolOutlined /> Academics</button></li>
                    <li><button><Settings /> Settings</button></li>
                    <li><button><Logout /> Log Out</button></li>
                </ul>
            </div>

            <div>
                <span>Stream v0.0.1</span>
            </div>
        </div>
    )
}
