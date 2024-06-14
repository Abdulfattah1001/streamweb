import { useEffect, useState } from "react"
import {auth} from '../../../firebase.config';
import {onAuthStateChanged} from 'firebase/auth'
import Header from "../../components/header"
import RecentMessageItem from "../../components/recentMessageItem";
import StreamBottomNavigation from "../../components/bottomNav";
import { fetchRecentMessage } from "../../../lib/message";
import { SwipeableDrawer } from "@mui/material";
import AndroidNavBar from "../../components/navbar";
import styles from '../../../styles/index/recentmsg.module.css'

export default function RecentMessaageList(){
    let [messages,setMessages] = useState()
    let [screenWidth,setScreenWidth] = useState(window.innerWidth);
    let [open,setOpen] = useState(false);
    let [user, setUser] = useState();


    useEffect(function(){
        onAuthStateChanged(auth,async function(user){
            if(user!=null){
                setUser(user)
                setMessages(await fetchRecentMessage());
            }
        })

        window.addEventListener('resize', setScreen);

    },[]);

    const setScreen = () => {
        setScreenWidth(window.innerWidth);
    }
    const openNavBar = (state)=>{
        setOpen(!state);
    }
    
    return  (
        <section className={styles.body}>
            <Header props={openNavBar} title={"Message"}/>

            <div></div>
            {
                screenWidth < 480 ? <SwipeableDrawer open={open} onClose={()=>{openNavBar(true)}} ><AndroidNavBar props={user} /></SwipeableDrawer> :null
            }

            <div>
                {
                    messages && messages.map(function(message,index){
                        return (<RecentMessageItem props={message} key={1}/>)
                    })
                }
            </div>

            { screenWidth < 480 ? <StreamBottomNavigation /> : null }

            <div></div>

        </section>
    )
}