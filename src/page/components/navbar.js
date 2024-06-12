import { Home, Logout,SchoolOutlined, Settings } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styles from '../../styles/index/navbar.module.css';

export default function AndroidNavBar(props){
    let user = props.props;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Avatar sx={
                    {
                        height:'70px',
                        width:'70px'
                    }
                }/>
                <div>
                    <span>{user.displayName}</span>
                    <span>{user.email}</span>
                </div>
            </div>

            <div className={styles.list}>
                <ul>
                    <li><button><Home /> <span>Home</span></button></li>
                    <li><button><SchoolOutlined /> <span>Academics</span></button></li>
                    <li><button><Settings /> <span>Settings</span></button></li>
                    <li><button><Logout /> <span>Log Out</span></button></li>
                </ul>
            </div>

            <div className={styles.footer}>
                <span>Stream v0.0.1</span>
            </div>
        </div>
    )
}