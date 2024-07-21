import style from './styles/App.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {auth} from './firebase.config';
import {onAuthStateChanged} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Apple, Google } from '@mui/icons-material';
import { Avatar } from '@mui/material';

export default function App(){

  const navigate = useNavigate();

  useEffect(function(){
    onAuthStateChanged(auth, (user)=>{
      if(user){
        navigate("/home");
      }
    })
  },[])

  let createAccountBtn = function(){
    navigate("/sign-up")
  }


  return(
    <section className={style.index}>
      <div className={style.logo}>
        <p>Stream</p>
        <Avatar src="icon.jpg"/>
      </div>

      <div className={style.content}>
        <h2>Streaming the latest event across the globe</h2>
        <div>
          <h3>Join us today</h3>
          <button><Google/>Sign up with Google</button>
          <button> <Apple/>Sign up with Apple</button>
          <span className={style.or}>or</span>
          <button onClick={()=>navigate("/sign-up")}>Create Account</button>
          <p>By signing up, you agree to the Terms of Service and Privacy Policy, including cookies use</p>

          <h4>Already have an account?</h4>
          <button onClick={()=>navigate("/login")}>Sign in</button>
        </div>
      </div>
      <footer></footer>
    </section>
  )
}