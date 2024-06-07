import Post from '../components/post';
import styles from '../styles/home.module.css';
import {auth} from '../firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';  
import post from '../lib/dummy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookSkull, faClose, faHandsBound, faHome, faMessage, faNoteSticky, faPerson, faSchool, faSearch, faStethoscope} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwipeableDrawer } from '@mui/material';
import React from 'react';
import NavBar from '../components/navbar';


export default function  Home(){
    const navigate = useNavigate();
    let posts = post;
    let anchor = 'left';
    let [isLoggedIn,setIsLogIn] = useState(false);
    let [open, setOpen] = useState(false);
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const logOut = () => {
        signOut(auth).then(() => setIsLogIn(false));
    }

    useEffect(function(){
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setIsLogIn(true);
            }else{
                setIsLogIn(false);
                //window.location.href = '/login'
            }
        })

        const handleScreen = ()=>{
            setScreenWidth(window.innerWidth);
        }

       return ()=>{
        window.addEventListener('resize', handleScreen);
    }

    },[]);

    const message = ()=>{
        navigate("/message");

    }

    const openNavBar = (isOpen) =>{
        setOpen(isOpen);
    }

    return(
        <section className={styles.home}>
           <header className={styles.header}>
           <div className={styles.userIcon}></div>
           <span>Stream</span>
                <nav>
                    <ul>
                        <li><FontAwesomeIcon className={styles.icon} icon={faSearch} /></li>
                    </ul>
                </nav>
            </header>
            <div className={styles.body}>
                <div className={styles.left}>
                    <ul>
                        <li>Stream</li>
                        <SwipeableDrawer anchor={anchor} open={open} onClose={()=>openNavBar(false)}>
                            <NavBar/>
                        </SwipeableDrawer>

                        <li onClick={screenWidth < 768 ? () => openNavBar(true) : null}><FontAwesomeIcon icon={faHome} className={styles.icon}/><span>Home</span></li>
                        <li> <FontAwesomeIcon icon={faMessage} className={styles.icon} onClick={message}/><span>Message</span></li>
                        <li><FontAwesomeIcon icon={faBookSkull} className={styles.icon}/><span>Notification</span></li>
                        <li><FontAwesomeIcon icon={faSearch} className={styles.icon}/><span>Explore</span></li>
                        <li><FontAwesomeIcon icon={faStethoscope} className={styles.icon} /><span>Settings</span></li>
                        <li><FontAwesomeIcon icon={faSchool} className={styles.icon}/><span>Academics</span></li>
                        <li><FontAwesomeIcon icon={faPerson} className={styles.icon}/><span>Profile</span></li>
                        <li><FontAwesomeIcon icon={faHandsBound} className={styles.icon}/><span>About</span></li>
                        <li onClick={logOut}><FontAwesomeIcon icon={faClose} className={styles.icon}/>Log out</li>
                    </ul>

                    <button>Post</button>

                    <footer>
                       <div>
                        <img alt='profile' src=''/>
                       </div>
                       <p>aminufattah6@gmail.com</p>
                    </footer>
                </div>


                <div className={styles.middle}>
                    {posts.map((post, index)=>{
                        return Post(post,index)
                    })}
                </div>
                <div className={styles.right}>
                    <div className={styles.search}>
                        <input type='search' placeholder='Search stream'/>
                    </div>

                    <div className={styles.premium}>
                        <p>Subscribe to Premium</p>
                        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                        <button>Subscribe</button>
                    </div>
                    <div className={styles.trends}></div>
                    <div className={styles.academics}></div>
                </div>
            </div>
            <footer className={styles.footer}>
                <FontAwesomeIcon icon={faHome}/>
                <FontAwesomeIcon icon={faMessage}/>
                <FontAwesomeIcon icon={faNoteSticky}/>
            </footer>
        </section>
    )
}