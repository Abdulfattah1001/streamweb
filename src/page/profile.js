import Post from '../components/post';
import styles from '../styles/profile.module.css';
import post from '../lib/dummy';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {onAuthStateChanged} from 'firebase/auth'
import {auth,firestore} from '../firebase.config';
import { collection, getDoc } from 'firebase/firestore';
import User from '../lib/user';

export default function Profile(){
    let navigate = useNavigate();
    let [user,setUser] = useState(new User());

    useEffect(function(){
        /**
         * @param {string} id 
         */
        async function  getUserDetails(id){
            const docRef = collection(firestore,"USER", id);

            const detailsSnapshot = await getDoc(docRef);

            if(detailsSnapshot.exists()){
                setUser(new User(detailsSnapshot.data()))
            }
        }

        onAuthStateChanged(auth, async function(user){
            if(user == null){
                navigate("/login", {
                    replace:true
                })
            }

            await getUserDetails(user.uid);
        })
    },[])

    let posts = post;
    

    return(
        <section>

<div className={styles.leftBody}></div>

<div className={styles.mainBody}>

<div className={styles.header}>

                <div className={styles.iconwrapper}>
                    <Avatar sx={
                        {
                            outline: '1px solid white'
                        }
                    } src={user.getForeground()} className={styles.icon}/>
                </div>

                <div className={styles.names}>
                    <p>{user.getNames()}</p>
                    <p>{user.getEmail()}</p>
                    <p>{user.getAbout()}</p>
                </div>

            </div>
            <div className={styles.body}>
                {
                    posts.map(function(post,index){
                        return (
                            <Post post={post} index={index} />
                        )
                    })
                }
            </div>
</div>

<div className={styles.right}></div>


        </section>
    )
}