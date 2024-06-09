import AcademicsBottomNavigation from '../components/academicsBottomNavBar';
import styles from '../styles/academics.module.css'
import { useEffect, useState } from "react";
import {collection} from 'firebase/firestore';
import{firestore, auth} from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export default function Academics(){
    let [course,setCourse] = useState();

    useEffect(function(){
        /**
         * @param {string} id 
         */
        async function fetchCourse(id){
            //const response = await fetch("https://stream-serve.onrender.com/api/")
            const collectRef = collection(firestore, "COURSE");
        }


        onAuthStateChanged(auth, async function(user){
            if(user != null){

            }
        })
    },[]);


    return (
        <section className={styles.section}>
            <div className={styles.bottomNav}>
                <AcademicsBottomNavigation />
            </div>
        </section>
    )
}