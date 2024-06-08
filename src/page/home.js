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
    let [posts,setPosts] = useState(null);
    let anchor = 'left';
    let [isLoggedIn,setIsLogIn] = useState(false);
    let [open, setOpen] = useState(false);
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(function(){
        async function fetch_post(id){

            const response = await fetch("https://stream-serve.onrender.com/api/posts?user="+id);

            let result=await response.json()

            return result;
        }

        onAuthStateChanged(auth, async(user)=>{
            if(user){
                setPosts(await fetch_post(user.uid));
            }else{
                navigate("/login");
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

    if(posts){
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
                        posts.map(function(pos,index){
                            return (
                                <Post post={pos} index={index}/>
                            );
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
    )}

    return (
        <div>LOADING</div>
    )
}