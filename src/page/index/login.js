import { Apple, Google, Microsoft } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from '../../styles/index/login.module.css'
import { useState } from "react";
import { collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";
import { firestore } from "../../firebase.config";
import { display, fontSize } from "@mui/system";

export default function LogIn(){

    //let passwordRef = createRef();

    let [emailVerified,setEmailVerification] = useState(false);
    let [email, setEmail] = useState("");

    const verifyEmail = async (email) => {
        const query01 = query(collection(firestore,"USER"),where("email","==",email));
        const emailsSnapshot = await getDocs(query01);
    
        if(emailsSnapshot.docs.length > 0){
            setEmailVerification(true);
        }else{
            setEmailVerification(false);
        }
    }


    return(
        <section className={styles.body}>
            <div className={styles.left}></div>

            <div className={styles.mainBody}>
                <div className={styles.logo}></div>

                <div className={styles.content}>
                    <span className={styles.header}>Welcome back</span>
                    <div className={styles.buttons}>
                        <div className={styles.inputs}><input type="text" placeholder="Email address" value={email} onChange={(newValue)=>{setEmail(newValue.target.value)}}/>
                        </div>

                        <div style={
                            {
                                display:emailVerified ? 'inline' : 'none'
                            }
                        } className={styles.inputs}><input type="password" placeholder="Password"/></div>

                        <button onClick={()=>{verifyEmail(email)}}>Continue</button>

                        <span className={styles.newuser}>Don't have an account? <Link ><span>Sign Up</span></Link></span>

                        <span className={styles.or}>OR</span>

                        <div className={styles.btn}><button><Google color="inherit"/> <span>Continue with Google</span></button></div>

                        <div className={styles.btn}><button><Microsoft /> <span>Continue with Microsoft Account</span></button></div>

                        <div className={styles.btn}><button><Apple /> <span>Continue with Apple</span></button></div>

                    </div>
                </div>
            </div>

            <div className={styles.right}></div>
        </section>
    )
}