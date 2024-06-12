import { useEffect, useState } from "react"
import {auth} from '../../firebase.config';
import {onAuthStateChanged} from 'firebase/auth'
import Header from "../../components/header";
import RecentMessageItem from "../../components/recentMessageItem";
import StreamBottomNavigation from "../../components/bottomNav";

export default function RecentMessaageList(){
    let [messages,setMessages] = useState()
    let [screenWidth,setScreenWidth] = useState(window.innerWidth);


    useEffect(function(){
        onAuthStateChanged(auth,async function(user){
            if(user!=null){
                setMessages()
            }
        })

        window.addEventListener('resize', setScreen);

    },[]);

    const setScreen = () => {
        setScreenWidth(window.innerWidth);
    }
    
    return  (
        <section>
            <Header/>

            <div></div>

            <div>
                {
                    messages.map(function(message,index){
                        return (<RecentMessageItem props={message} key={1}/>)
                    })
                }
            </div>

            { screenWidth < 480 ? <StreamBottomNavigation /> : null }

            <div></div>

        </section>
    )
}