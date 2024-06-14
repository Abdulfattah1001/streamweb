import styles from '../../../styles/index/coursecard.module.css';

export default function CourseItem(course){
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
                        <img src={course.course_thumbnail}/>
                    </div>
                </div>
            </div>
        </div>
    )
}