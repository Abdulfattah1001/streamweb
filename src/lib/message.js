import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import {auth, firestore} from '../firebase.config';

async function fetchRecentMessage(){
    await auth.authStateReady();
    const user = auth.currentUser;

    let msgs = [];

    if(user!=null){
        const id = user.uid;

        try{
            const response = await fetch(`https://stream-serve.onrender.com/api/messages?user=${id}`);

            const jsonResult = await response.json();

            msgs = msgs.concat(jsonResult);

        }catch(err){
            console.log(`ERROR OCCURED: ${err.message}`);
        }
    }
    
    return msgs;
}

export {
    fetchRecentMessage
}