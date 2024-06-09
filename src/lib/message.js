import { collection, doc, getDoc, getDocs, orderBy, setDoc } from 'firebase/firestore';
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

async function sendMessage(id, message){
    await auth.authStateReady();
    if(auth.currentUser!=null){
        const uid = auth.currentUser.uid;
        const msgRef = collection(firestore, "MESSAGES", uid, id);

        await setDoc(doc(msgRef, Date.now().toString()), {
            "author_foreground":null,
            "author_id": uid,
            "author_name":null,
            "content":message,
            "date":Date.now().toString(),
            "isSender":true,
            "message_id":Date.now().toString(),
            "read_status":true,
            "receiver_id":id,
        });

        const msgRef2 = collection(firestore, "MESSAGES", id, uid);

        await setDoc(doc(msgRef2, Date.now().toString()), {
            "author_foreground":null,
            "author_id": id,
            "author_name":null,
            "content":message,
            "date":Date.now().toString(),
            "isSender":false,
            "message_id":Date.now().toString(),
            "read_status":false,
            "receiver_id":uid,
        });
    }
}

export {
    getMessages,
    fetchRecentMessage,
    sendMessage
}