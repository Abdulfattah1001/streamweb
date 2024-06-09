import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/messagecompose.module.css';
import { useEffect, useState } from 'react';
import { getMessages, sendMessage } from '../lib/message';
import { Avatar, Button, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowDownAZ, faSearch, faSection } from '@fortawesome/free-solid-svg-icons';
import { SendMessage, ReceivedMessage } from '../components/messageList';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';

export default function MessageCompose(){
    let location = useLocation()
    let navigate = useNavigate();
    let [content,setContent] = useState("")
    let [messages, setMessages] = useState()

    useEffect(function(){
        onAuthStateChanged(auth, function(user){
            if(user == null){
                navigate("/login",{
                    replace:true
                })
            }
        })
        getMessages(location.state.message.author_id).then((data)=>{
            setMessages(data)
        }).catch((err)=>{
            console.log("ERROR FETCHING MESSAGE: ", err.message);
        })
    },[])

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <Avatar alt={location.state.message.author_name} src={location.state.message.author_foreground}/>
                <div className={styles.name}>
                    <p className={styles.username}>{location.state.message.author_name}</p>
                    <p className={styles.date}>Wednesday 20 2024 16:00pm</p>
                </div>
                <nav>
                    <FontAwesomeIcon icon={faSearch}/>
                </nav>
            </header>
            <div className={styles.mainBody}>
                <div className={styles.messageList}>
                    {
                        messages && messages.map(function(message, index){
                            
                            if(message.isSender){
                                return (
                                    <SendMessage message={message} />
                                )
                            }
                            return (
                                <ReceivedMessage message={message}/>
                            )
                        })
                    }
                    
                </div>

                <div className={styles.inputWrapper}>
                    <textarea id="text" value={content} onChange={(value)=>{
                        setContent(value.target.value)
                    }} rows={1} placeholder='Enter your message....' />
                    <Button onClick={()=>{
                        if(content.length > 0){
                            sendMessage(location.state.message.author_id, content).then(()=>setContent(""));
                        }
                    }} endIcon={<FontAwesomeIcon icon={faArrowAltCircleUp}/>} sx={
                        {
                            bgcolor:'blue',
                        }
                    }/>
                </div>
            </div>
        </section>
    )
}