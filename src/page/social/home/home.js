import { useEffect, useState } from "react"
import { ShimmerPostList } from "react-shimmer-effects";
import {auth} from '../../../firebase.config';
import { onAuthStateChanged } from "firebase/auth";
import PostItem from "../../components/postItem";
import StreamBottomNavigation from "../../components/bottomNav";
import { SwipeableDrawer } from "@mui/material";
import AndroidNavBar from "../../components/navbar";
import TabletNavBar from "../../components/tabNavbar";
import {fetchData} from '../../../lib/utilities/posts';
import { useNavigate } from "react-router-dom";
import styles from '../../../styles/index/home.module.css';
import Header from "../../components/header";

export default function Home(){
    let navigate = useNavigate();
    /**
     * @type {Post} posts
     * @property {Post}
     */
    let [posts, setPosts] = useState();
    
    let [open, setOpen] = useState(false);
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);
    let [user, setUser] = useState();

    useEffect(function(){
        onAuthStateChanged(auth, async function(user){
            if(user!=null){
                setPosts(await fetchData(user.uid));
                setUser(user);
            }else{
                navigate("/")
            }
        });

        window.addEventListener('resize', setScreen);
        
    },[])

    const setScreen = () => {
        setScreenWidth(window.innerWidth);
    }

    const onToggleNavBar = (state) => {
        setOpen(!state);
    }

    if(posts){
        return (
            <section className={styles.body}>
                <Header props={onToggleNavBar} title={"Stream"}/>
                <div className={styles.left}>
                    { screenWidth > 480 ? <TabletNavBar /> : null }
                </div>

                { screenWidth < 480 ? <SwipeableDrawer open={open} onClose={()=>onToggleNavBar(true)} > <AndroidNavBar props={user} /> </SwipeableDrawer> : null }

                <div className={styles.main}>
                    {posts.map(function(post, index){
                        return (
                            <PostItem props={post} key={1} />
                        )
                    })}
                </div>

                <div className={styles.right}>
                </div>

                { screenWidth < 480 ? <StreamBottomNavigation/> : null }
            </section>
        )
    }
    return(
        <ShimmerPostList col={1} row={5}/>
    )
}