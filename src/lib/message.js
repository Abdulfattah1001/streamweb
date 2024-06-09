import { collection, doc, getDoc, getDocs, orderBy } from 'firebase/firestore';
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

async function getMessages(puid){
    let messages =[];
    await auth.authStateReady();

    if(auth.currentUser!=null){
        const messageRef = await getDocs(collection(firestore, "MESSAGES", `${auth.currentUser.uid}`,`${puid}`),orderBy("date"));

    if(messageRef.docs.length > 0){
        for(let msg of messageRef.docs){
            messages.push(msg.data());
        }
    }else{
        console.log("DOES NOT EXITS");
    }
    }
    return messages;
}

export {
    getMessages,
    fetchRecentMessage
}