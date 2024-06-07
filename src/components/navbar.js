import styles from '../styles/navbar.module.css'

export default  function NavBar(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.icon}>

                </div>

                <div>
                    <p>Abdulfattah Ameen</p>
                    <p>aminufattah6@gmail.com</p>
                </div>
            </div>
            <div className={styles.body}>
                <ul>
                    <li>Home</li>
                    <li>Academics</li>
                    <li>Settings</li>
                    <li>Log out</li>
                </ul>
            </div>
            <div className={styles.footer}>
                <p>Stream V0.0.1</p>
            </div>
        </div>
    )
}