import styles from '../styles/courseEdit.module.css';

export default function CourseEdit(){
    return (
        <section className={styles.body}>
            <div><span>Course Template</span></div>
            <div className={styles.inputwrapper}>
            
                <div className={styles.inputBox}>
                    <span>Name:</span>
                    <div className={styles.input}><input placeholder='Enter the course name' required></input></div>
                </div>

                <div className={styles.inputBox}>
                    <span>Description:</span>
                    <div className={styles.input}><input placeholder='Enter the course description' required></input></div>
                </div>

                <div className={styles.inputBox}>
                    <span>Language:</span>
                    <div className={styles.input}><input placeholder='Select the course language'></input></div>
                </div>

                <div className={styles.inputBox}>
                    <span>Expiration Date:</span>
                    <input></input>
                </div>

            </div>

            <div></div>
        </section>
    )
}