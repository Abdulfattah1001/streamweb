import { useEffect, useState } from 'react';
import styles from '../styles/message.module.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { List, SwipeableDrawer } from '@mui/material';
import NavBar from '../components/navbar';
import message from '../lib/messageDummy';
import RecentMessageItem from '../components/recentmessage';
import { fetchRecentMessage } from '../lib/message';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/bottomnav';

export default function Message(){
    let navigate = useNavigate();

    let [open, setOpen] = useState(false);
    let [isLoggedIn,setIsLogIn] = useState(false);
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);
    let [msg, setMsg] = useState();

    const openNavBar = (isOpen) =>{setOpen(isOpen);}


    useEffect(function(){
        onAuthStateChanged(auth, async (user)=>{
            if(user){
                setIsLogIn(true);
                setMsg(await fetchRecentMessage(user.uid));
            }else{
                setIsLogIn(false);
                navigate("/login",{
                    replace:  true
                })
            }
        })

        const handleScreen = ()=>{
            setScreenWidth(window.innerWidth);
        }

       return ()=>{
        window.addEventListener('resize', handleScreen);
    }
    },[]);

    return(
        <section>
            <header className={styles.header}>
                <div onClick={screenWidth < 468  ? ()=> openNavBar(true) : screenWidth < 900 ? ()=> openNavBar(true) : null} className={styles.usericon}></div>

                <span>Message</span>

                <nav>
                    <ul>
                        <li><FontAwesomeIcon icon={faSearch} /></li>
                    </ul>
                </nav>

                <SwipeableDrawer onClose={()=>openNavBar(false)} open={open}>
                        <NavBar />
                    </SwipeableDrawer>

            </header>

            <div className={styles.messageListWrapper}>
                <List>
                    {
                        msg && msg.map(function(message,index){
                            //return (RecentMessageItem <recentMessage={message} index={index} />)
                            return (
                                <RecentMessageItem recentMessage={message} index={index} />
                            )
                        })
                    }
                </List>
            </div>

            <div>
                <BottomNav />
            </div>
        </section>
    )
}