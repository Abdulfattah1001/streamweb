import AcademicsBottomNavigation from '../components/academicsBottomNavBar';
import styles from '../styles/academics.module.css'
import { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore';
import{firestore, auth} from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import CourseCardDisplay from '../components/displayCourse';
import { AppBar, Dialog, DialogContent, DialogTitle, Fab } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Academics(){
    let [course,setCourse] = useState();
    let course01 = [];
    let navigate = useNavigate();

    useEffect(function(){
        /**
         * @param {string} id 
         */
        async function fetchCourse(id){
            
            const collectRef = collection(firestore, "COURSE");

            const courseSNapshot = await getDocs(collectRef);

            if(courseSNapshot.docs.length > 0){
                for(let snap of courseSNapshot.docs){
                    course01.push(snap.data());
                }
                setCourse(course01);
                console.log(course)
            }
        }


        onAuthStateChanged(auth, async function(user){
            if(user != null){
                await fetchCourse(user.uid);
            }else{
                navigate("/login");
            }
        })
    },[]);


    return (
        <section className={styles.section}>
            <div className={styles.course_wrapper}>
                {
                   course && course.map(function(course, index){
                        return (
                            <CourseCardDisplay course={course} />
                        )
                    })
                }
            </div>

            <Fab size='small' sx={
                        {
                            position:'fixed',
                            bottom: '60px',
                            right:'20px',
                        }
                    } color='primary' aria-label='add' >
                        <FontAwesomeIcon icon={faMessage} />
                    </Fab>

            <div className={styles.bottomNav}>
                <AcademicsBottomNavigation />
            </div>
        </section>
    )
}