import AcademicsBottomNavigation from '../components/academicsBottomNavBar';
import styles from '../styles/academics.module.css'
import { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore';
import{firestore, auth} from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import CourseCardDisplay from '../components/displayCourse';

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


            <div className={styles.bottomNav}>
                <AcademicsBottomNavigation />
            </div>
        </section>
    )
}