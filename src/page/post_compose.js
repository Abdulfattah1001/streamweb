import { useNavigate } from 'react-router-dom';
import styles from '../styles/postcompose.module.css';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';

export default function PostCompose(){

    let navigate = useNavigate();

    useEffect(function(){
        onAuthStateChanged(auth,function(user){
            if(user == null){
                navigate("/login", {
                    replace:true
                })
            }
        })
    },[]);


    return (
        <section className={styles.body}>
            <div className={styles.left}></div>
            <div className={styles.main}>
                <div className={styles.input}><textarea autoFocus="true" placeholder="What's on your mind?" type='text' rows={10}/></div>
            </div>
            <div className={styles.right}></div>
        </section>
    )
}