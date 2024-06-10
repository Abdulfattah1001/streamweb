import { useState } from "react";
import { BottomNavigation,BottomNavigationAction } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faSearch, faPerson, faBook} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

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
                <BottomNavigationAction component={Link} to={'/academics'}  label="Home" value='/academics' icon={<FontAwesomeIcon icon={faHome} />}/>

                <BottomNavigationAction component={Link} to={'/academics/explore'} value='/academics/explore'  label="Explore" icon={<FontAwesomeIcon icon={faSearch}/>}/>


                <BottomNavigationAction component={Link} to={'/academics/dashboard'} value='/academics/dashboard'  label="Dashboard" icon={<FontAwesomeIcon icon={faBook}/>}/>

            </BottomNavigation>
    )
}