import { Avatar, Button, Card } from "@mui/material";
import styles from '../styles/course.module.css';

export default function CourseCardDisplay(course){
    course = course.course;
    return (
        <div>
            <div>
                <div className={styles.course_container}>
                    <div className={styles.header}>
                        <img src={course.course_thumbnail} />
                    </div>

                    <div className={styles.content}>
                        <p className={styles.course_title}>{course.course_title}</p>
                        <p className={styles.school}>Abubakar Tafawa Balewa University</p>
                        <p className={styles.degree}>Bachelor's Degree</p>
                    </div>

                    <div className={styles.logo}>
                        <img src={"2.jpeg"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}