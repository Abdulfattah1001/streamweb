import { Card, TextField } from '@mui/material';
import styles from '../styles/createAccount.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css';
import {auth} from '../firebase.config';


export default function CreateAccount(){

    let [passwordInput, setPasswordInput]=useState(null);

    useEffect(function(){
        setPasswordInput(document.getElementById("password"));
        document.getElementById("password").style.display='none'
    },[])



    const signInWithGoogle =  function(){
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        ui.start("#firebaseui-auth-container",{
            signInOptions:[
                {
                    provider:firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName:true,
                    disableSignUp:{
                        status:false
                    }
                }
            ],
            signInSuccessUrl:'/home',
            callbacks:{
                signInSuccessWithAuthResult:function(authResult, redirectUrl){
                    return  true;
                },
                uiShown:function(){
                    document.getElementById('firebaseui-auth-container').style.display= 'none'
                }
            },
            signInFlow:'popup'
        })
    }

    const continuebtn = ()=>{
        passwordInput.style.display ='block';
    }


    return (
        <section className={styles.body}>
            <div className={styles.logo}>
                <div className={styles.icon}>

                </div>
            </div>
            <div id="firebaseui-auth-container"></div>
            <div className={styles.inputs}>
                <div>
                    <h1>Create an account</h1>
                
                    <input id='email' type='email' placeholder='Email address' required/>

                    <input id='password' type='password' placeholder='Password' required/>

                    <button onClick={continuebtn} className={styles.submitbtn}>Continue</button>

                    <p className={styles.fuser}>Already have an account? <Link to={"/login"} style={
                        {
                            textDecoration:'none'
                        }
                    }><span className={styles.link}>Login</span></Link> </p>

                <span className={styles.or}>or</span>

                <button onClick={()=>signInWithGoogle()} className={styles.button}>
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