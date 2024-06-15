import { Home, Logout,SchoolOutlined, Settings } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styles from '../../styles/index/navbar.module.css';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";

export default function AndroidNavBar(props){
    let user = props.props;
    let navigate = useNavigate();

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
                    <span>{user && user.displayName}</span>
                    <span>{user && user.email}</span>
                </div>
            </div>

            <div className={styles.list}>
                <ul>
                    <li><button><Home /> <span>Home</span></button></li>
                    <li><button onClick={()=>navigate("/academics")}><SchoolOutlined /> <span>Academics</span></button></li>
                    <li><button><Settings /> <span>Settings</span></button></li>
                    <li><button onClick={()=>auth.signOut().then(()=>navigate("/"))}><Logout /> <span>Log Out</span></button></li>
                </ul>
            </div>

            <div className={styles.footer}>
                <span>Stream v0.0.1</span>
            </div>
        </div>
    )
}