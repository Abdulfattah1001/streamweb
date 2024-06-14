import { useState } from "react";
import { BottomNavigation,BottomNavigationAction } from "@mui/material";

import { Link } from "react-router-dom";
import { Home, Person2Outlined, Search } from "@mui/icons-material";

export default function AcademicsBottomNavigation(){
    const path = window.location.pathname;
    let [value,setValue] = useState(path);


    return (
            <BottomNavigation
                sx={{
                    bgcolor: 'black',
                    position: 'fixed',
                    bottom:'0px',
                    left: '0px',
                    right:'0px',
                    width:'100%'
                }}
                showLabels={false}
                value={value}
                onChange={(event,value)=>setValue(value)}
            >
                <BottomNavigationAction component={Link} to={'/v2/academics'}  label="Home" value='/academics' icon={<Home />}/>

                <BottomNavigationAction component={Link} to={'/v2/academics/explore'} value='/academics/explore'  label="Explore" icon={<Search />}/>


                <BottomNavigationAction component={Link} to={'/v2/academics/dashboard'} value='/academics/dashboard'  label="Dashboard" icon={<Person2Outlined />}/>

            </BottomNavigation>
    )
}