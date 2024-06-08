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

export default function Message(){
    let msg = message;

    let [open, setOpen] = useState(false);
    let [isLoggedIn,setIsLogIn] = useState(false);
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const openNavBar = (isOpen) =>{
        setOpen(isOpen);
    }


    useEffect(function(){
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setIsLogIn(true);
            }else{
                setIsLogIn(false);
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
                        msg.map(function(message,index){
                            return RecentMessageItem(message, index)
                        })
                    }
                </List>
            </div>
        </section>
    )
}