import style from './styles/App.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import auth from './firebase.config';
import {onAuthStateChanged} from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function App(){

  const [isLoggedIn, setIsLogIn] = useState(false);

  useEffect(function(){
    onAuthStateChanged(auth, (user)=>{
      if(user){
        window.alert("You're logged in before")
        setIsLogIn(true);
      }else{
        window.alert("You're not log in");
        setIsLogIn(false);
      }
    })
  },[])


  return(
    <section className={style.index}>
      <div className={style.logo}>
        <p>Stream</p>
      </div>

      <div className={style.content}>
        <h2>Streaming the latest event across the globe</h2>
        <div>
          <h3>Join us today</h3>
          <button><FontAwesomeIcon icon={faGoogle} className={style.icon}/>Sign up with Google</button>
          <button>Sign up with Apple</button>
          <span className={style.or}>or</span>
          <button>Create Account</button>
          <p>By signing up, you agree to the Terms of Service and Privacy Policy, including cookies use</p>

          <h4>Already have an account?</h4>
          <button>Sign in</button>
        </div>
      </div>
      <footer></footer>
    </section>
  )
}