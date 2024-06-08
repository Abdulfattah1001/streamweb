import { Avatar } from '@mui/material'
import styles from '../styles/navbar.module.css'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config';
import { signOut } from 'firebase/auth';


export default  function NavBar(){
    let navigate = useNavigate();

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
               <Avatar src='1.jpg' onClick={()=>navigate("/profile")}/>

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
                    <li onClick={logOut}>Log out</li>
                </ul>
            </div>
            <div className={styles.footer}>
                <p>Stream V0.0.1</p>
            </div>
        </div>
    )
}