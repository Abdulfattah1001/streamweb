import Post from '../components/post';
import styles from '../styles/home.module.css';
import {auth} from '../firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';  
import post from '../lib/dummy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd, faBell, faBookSkull, faClose, faHandsBound, faHome, faMessage, faNoteSticky, faPerson, faSchool, faSearch, faStethoscope} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, BottomNavigation, BottomNavigationAction, Drawer, Fab, SwipeableDrawer } from '@mui/material';
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
            }
        })

        const handleScreen = ()=>{
            setScreenWidth(window.innerWidth);
        }

       return ()=>{
        window.addEventListener('resize', handleScreen);
    }

    },[]);

    const openNavBar = (isOpen) =>{
        setOpen(isOpen);
    }

    return(
        <section>
           <header className={styles.header}>
                <Avatar alt='Profile picture' src="1.jpg" onClick={screenWidth < 468  ? ()=> openNavBar(true) : screenWidth < 900 ? ()=> openNavBar(true) : null}/>

                <span>Stream</span>

                <nav>
                    <ul>
                        <li><FontAwesomeIcon icon={faSearch} /></li>
                    </ul>
                </nav>

            </header>

            <div className={styles.body}>
                <div className={styles.leftbody}>
                    <SwipeableDrawer onOpen={()=>openNavBar(true)} onClose={()=>openNavBar(false)} open={open}>
                        <NavBar />
                    </SwipeableDrawer>
                </div>

                <div className={styles.mainbody}>
                    {
                        posts.map(function(post,index){
                            return Post(post,index);
                        })
                    }

                    <Fab onClick={()=>navigate("/post/compose")} size='small' sx={
                        {
                            position:'fixed',
                            bottom: '20px',
                            right:'20px'
                        }
                    } color='primary' aria-label='add' >
                        <FontAwesomeIcon icon={faAdd} />
                    </Fab>

                </div>

                <div className={styles.rightbody}>
                    
                </div>

            </div>
            
        </section>
    )
}