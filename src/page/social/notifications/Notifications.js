import { useEffect, useState } from "react"
import Header from "../../components/header";
import TabletNavBar from "../../components/tabNavbar";
import { SwipeableDrawer } from "@mui/material";
import AndroidNavBar from "../../components/navbar";
import { auth } from "../../../firebase.config";
import StreamBottomNavigation from "../../components/bottomNav";
import { onAuthStateChanged } from "firebase/auth";
import styles from '../../../styles/index/notification.module.css';

export default function Notifications(){
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);
    let [open, setOpen] = useState(false);
    let [user, setUser] = useState();
    let [notifications, setNotifications] = useState();

    useEffect(function(){
        onAuthStateChanged(auth,async function(user){
            if(user!=null){
                setUser(user);
            }
        })
        window.addEventListener('resize', setScreen);
    },[]);

    let setScreen = () =>{
        setScreenWidth(window.innerWidth);
    }

    let openNavBar = (state)=>{
        setOpen(!state);
    }

    return(
        <section className={styles.body}>
            <Header  callback={openNavBar} title={"Notifications"}/>
            <div>
                {screenWidth > 480 ? <TabletNavBar /> : null}
            </div>
            {
                screenWidth < 480 ? <SwipeableDrawer open={open} onClose={()=>openNavBar(true)}>
                    <AndroidNavBar props={user} />
                </SwipeableDrawer> : null
            }
            <div className={styles.main}>
                {notifications && <p>Your list of notifications is 1000</p>}
                {!notifications && <div className={styles.errorText}><p>Nothing to show here</p></div>}
            </div>

            <div></div>
            {screenWidth < 480 ? <StreamBottomNavigation /> : null}
        </section>
    )
}