import { Home, Message, NotificationAdd } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function StreamBottomNavigation(){
    let [value,setValue]= useState(window.location.pathname);
    return (
        <BottomNavigation sx={
            {
                backgroundColor:'transparent',
                position:'fixed',
                bottom:'0px',
                width:'100%',
                outline:'1px solid black'
            }
        }
        value={value}
        onChange={(event, newValue)=>{setValue(newValue)}}
        >
            <BottomNavigationAction  component={Link} to={'/v2/home'} label="Home" value="/v2/home" icon={<Home />} />
            <BottomNavigationAction  component={Link} to={'/v2/message'} label="Message" value="/v2/message" icon={<Message />} />
            <BottomNavigationAction  component={Link} to={'/v2/notification'} label="Notification" value="/v2/notification" icon={<NotificationAdd />} />
        </BottomNavigation>
    )
}