import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase.config';

async function getSignState(){
    onAuthStateChanged(auth, (user)=>{
        
    })
}