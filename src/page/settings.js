import { onAuthStateChanged } from "firebase/auth"
import auth from "../firebase.config"
import { useEffect, useState } from "react"

export default function(){
    const [isLoggedIn, setIsLogIn] = useState(false);

    useEffect(function(){
        onAuthStateChanged(auth, (user)=>{
            if(user == null || user == undefined){
                setIsLogIn(false);
            }else{
                setIsLogIn(true);
            }
        })
    },[])


    onAuthStateChanged(auth, (user)=>{
        if(user == null || user== undefined){

        }
    })

    return (
        <div>
            <h1>Settings page</h1>
        </div>
    )
}