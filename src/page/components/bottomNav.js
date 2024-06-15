import { Home, Message, NotificationAdd } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function StreamBottomNavigation(){
    let [value,setValue]= useState(window.location.pathname);
    return (
        <BottomNavigation sx={
            {
                backgroundColor:'white',
                zIndex:'100',
                position:'fixed',
                bottom:'0px',
                width:'100%',
                outline:'1px solid black'
            }
        }
        value={value}
        onChange={(event, newValue)=>{setValue(newValue)}}
        >
            <BottomNavigationAction  component={Link} to={'/home'} label="Home" value="/home" icon={<Home />} />
            <BottomNavigationAction  component={Link} to={'/message'} label="Message" value="/message" icon={<Message />} />
            <BottomNavigationAction  component={Link} to={'/notification'} label="Notification" value="/notification" icon={<NotificationAdd />} />
        </BottomNavigation>
    )
}