import { useEffect, useState } from "react";
import AcademicsBottomNavigation from "../../../components/academicsBottomNavBar";
import styles from '../../../styles/index/courseprofile.module.css'
import { Avatar } from "@mui/material";

export default function CourseProfile(){
    let [screenWidth, setScreenWidth]=useState(window.innerWidth);
    let [courses, setCourses] = useState();

    useEffect(function(){
        window.addEventListener('resize', ()=>{setScreenWidth(window.innerWidth)});
    },[]);

    return (
        <section className={styles.body}>
            <div></div>

            <div className={styles.main}>
                <div className={styles.userinfo}>
                    <div className={styles.info}>
                        <span>Hi, Abdulfattah Ameen</span>
                        <p>Behind every completed application is a story of determination and the 
                            courage to chase one's dream.You are the author of your success story
                        </p>
                    </div>
                    <Avatar sx={
                        {
                            width:'70px',
                            height:'70px'
                        }
                    } />
                </div>

                <div className={styles.content}>
                    {
                        courses && courses.map(function(course, index){
                            return <p></p>
                        })
                    }
                    {
                        !courses && <p>Empty course</p>
                    }
                </div>
            </div>

            <div></div>

            {screenWidth < 480 ? <AcademicsBottomNavigation /> : null}
        </section>
    )
}