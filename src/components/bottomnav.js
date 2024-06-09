import { faBell, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faHome, faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import Message from "../page/message";
import { Link } from "react-router-dom";
import styles from '../styles/bottom.module.css'

export default function BottomNav(){
    const pathname = window.location.pathname;
    let [value, setValue] = useState(pathname);
    return (
        <section>
            <BottomNavigation sx={
                {
                    position: 'fixed',
                    bottom:'0px',
                    width:'99vw',
                    backgroundColor:'transparent',
                    outline:'1px solid black',
                    boxSizing:'border-box',
                    margin:'0px',
                    padding:'0px'
                }
            }  value={value} onChange={(event,value)=>{setValue(value)}} className={styles.bottom}>
                <BottomNavigationAction component={Link} to={'/'} label="Home" value="/home" icon={<FontAwesomeIcon icon={faHome}/>}/>

                <BottomNavigationAction component={Link} to={'/message'} label="Message" value = '/message' icon={<FontAwesomeIcon icon={faMessage}/>}/>

                <BottomNavigationAction component={Link} to={'/notification'} label="Notification" value='/notification' icon={<FontAwesomeIcon icon={faBell}/>}/>
            </BottomNavigation>
        </section>
    )
}