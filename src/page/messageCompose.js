import { useLocation } from 'react-router-dom';
import styles from '../styles/messagecompose.module.css';
import { useEffect, useState } from 'react';
import { getMessages } from '../lib/message';
import { Avatar, Button, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowDownAZ, faSearch, faSection } from '@fortawesome/free-solid-svg-icons';
import { SendMessage, ReceivedMessage } from '../components/messageList';

export default function MessageCompose(){
    let location = useLocation()
    console.log(location.state.message.author_id)
    let [messages, setMessages] = useState()

    useEffect(function(){
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
                            console.log("MESSAGES:", message)
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
                    <textarea rows={1} placeholder='Enter your message....' />
                    <Button endIcon={<FontAwesomeIcon icon={faArrowAltCircleUp}/>} sx={
                        {
                            bgcolor:'blue',
                        }
                    }/>
                </div>
            </div>
        </section>
    )
}