import { Avatar } from '@mui/material'
import styles from '../styles/navbar.module.css'
import { useNavigate } from 'react-router-dom'
import { auth, firestore } from '../firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import User from '../lib/user';


export default  function NavBar(){
    let navigate = useNavigate();
    let [user, setUser] = useState();

    useEffect(function(){

        const getUser = async ()=>{
            
        }


        onAuthStateChanged(auth, async(u)=>{
            if(u){
                const docRef = doc(firestore, "USER",`${u.uid}`);
                const result = await getDoc(docRef);
                setUser(new User(result.data()));
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth).then(()=>{
            navigate("/login");
        }).catch((err)=>{
            console.log("err", err.message);
        })
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
               <Avatar src={user && user.getForeground()} onClick={()=>navigate("/profile")}/>

                <div>
                    <p>{user && user.getNames()}</p>
                    <p>{user && user.getEmail()}</p>
                </div>
            </div>
            <div className={styles.body}>
                <ul>
                    <li>Home</li>
                    <li>Academics</li>
                    <li>Settings</li>
                    <li onClick={logOut}>Log out</li>
                </ul>
            </div>
            <div className={styles.footer}>
                <p>Stream V0.0.1</p>
            </div>
        </div>
    )
}