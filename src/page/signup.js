import { Card, TextField } from '@mui/material';
import styles from '../styles/createAccount.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

export default function CreateAccount(){
    return (
        <section className={styles.body}>
            <div className={styles.logo}>
                <div className={styles.icon}>

                </div>
            </div>
            <div className={styles.inputs}>
                <div>
                    <h1>Create an account</h1>
                
                    <input type='email' placeholder='Email address' required/>

                    <button className={styles.submitbtn}>Continue</button>

                    <p className={styles.fuser}>Already have an account? <Link to={"/login"} style={
                        {
                            textDecoration:'none'
                        }
                    }><span className={styles.link}>Login</span></Link> </p>

                <span className={styles.or}>or</span>

                <button className={styles.button}>
                    <FontAwesomeIcon icon={faGoogle}/>
                    <span>Continue with Google</span>
                </button>
                <button className={styles.button}>
                    <FontAwesomeIcon className='font'  icon={faMicrosoft}/>
                    <span>Continue with Microsoft Account</span>
                </button>
                <button className={styles.button}>
                    <FontAwesomeIcon icon={faApple}/>
                    <span>Continue with Apple</span>
                </button>

                </div>

                
            </div>
        </section>
    )
}