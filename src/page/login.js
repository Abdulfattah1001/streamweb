import { useState } from 'react';
import styles from '../styles/login.module.css';
import {auth} from '../firebase.config';
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login(){

    let navigate = useNavigate();

    let [email,setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [isLogin, setIsLogIn] = useState(false);

    const onSubmit = async (e) =>{
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password).then((user)=>{
            setIsLogIn(true);
            navigate("/home");
        }).catch((err)=>{
            window.alert(`Error occured ${err.message}`)
        });
    }

    return(
        <section className={styles.login}>
            <div className={styles.logindiv}>
                <form>
                    <div>
                        <input type='text' placeholder='Enter your email or username' onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>

                    <div>
                        <input type='password' placeholder='Enter your Password' aria-label='Password' onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>

                    <div>
                        <button type='submit' onClick={onSubmit}>Log in</button>
                    </div>
                </form>
            </div>
        </section>
    )
}