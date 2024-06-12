import { Apple, Google, Microsoft } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from '../../styles/index/login.module.css'

export default function LogIn(){
    return(
        <section className={styles.body}>
            <div className={styles.left}></div>

            <div className={styles.mainBody}>
                <div className={styles.logo}></div>

                <div className={styles.content}>
                    <span className={styles.header}>Welcome back</span>
                    <div className={styles.buttons}>
                        <div className={styles.inputs}><input type="text" placeholder="Email address"/></div>

                        <div style={
                            {
                                display:'none'
                            }
                        } className={styles.inputs}><input type="password" placeholder="Password"/></div>

                        <button>Continue</button>

                        <span className={styles.newuser}>Don't have an account? <Link ><span>Sign Up</span></Link></span>

                        <span className={styles.or}>OR</span>

                        <div className={styles.btn}><button><Google /> <span>Continue with Google</span></button></div>

                        <div className={styles.btn}><button><Microsoft /> <span>Continue with Microsoft Account</span></button></div>

                        <div className={styles.btn}><button><Apple /> <span>Continue with Apple</span></button></div>

                    </div>
                </div>
            </div>

            <div className={styles.right}></div>
        </section>
    )
}