import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../../firebase.config';

async function getSignState(){
    onAuthStateChanged(auth, (user)=>{
        
    })
}

/**
 * @param {string} firstname 
 * @param {string} lastname 
 * @param {string} username 
 * @param {string} email 
 * @param {string} password 
 */
export async function createUserAccount(firstname, lastname, username, email, password){
    try {
        const response = await fetch("https://stream-serve.onrender.com/api/authentication/sign-up",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "firstname":firstname,
                "lastname":lastname,
                "username":username,
                "email":email,
                "password":password
            })
        })
        const data = await response.json();
        if(data["status_code"] == 202){
            return data["payload"]
        }else{
            window.alert(`Unable to create account ${data["status_message"]}`)
        }
    } catch (error) {
        window.alert(`Error occured ${error.message}`)
    }
}