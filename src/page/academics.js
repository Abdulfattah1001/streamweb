import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/academics.module.css'
import { BottomNavigation, BottomNavigationAction, createTheme } from "@mui/material";
import { useState } from "react";
import Home from "./home";
import AcademicsExplore from "./academicExplore";
import AcademicsDashboard from "./academicsDashboard";
import AcademicsHome from "./academicsHome";
import CourseEdit from "./courseEdit";

export default function Academics(){
    let [value, setValue] = useState(0);

    const theme = createTheme({

    })

    return (
        <section className={styles.section}>
            {
                value == 0 && <AcademicsHome />
            }
            {
                value == 1 && <AcademicsExplore />
            }
            {
                value == 2 && <CourseEdit />
            }
            {
                value == 3 && <AcademicsDashboard />
            }
            <BottomNavigation
                sx={{
                    bgcolor: 'black',
                    position: 'absolute',
                    bottom:'0px',
                    left: '0px',
                    right:'0px'
                }}
                showLabels={true}
                value={value}
                onChange={(event,newValue)=>setValue(newValue)}
            >
                <BottomNavigationAction  label="Home" icon={<FontAwesomeIcon icon={faHome} />}/>
                <BottomNavigationAction  label="Explore" icon={<FontAwesomeIcon icon={faSearch}/>}/>
                <BottomNavigationAction  label="Course Edit" icon={<FontAwesomeIcon icon={faSearch}/>}/>
                <BottomNavigationAction  label="Dashboard" icon={<FontAwesomeIcon icon={faPerson}/>}/>
            </BottomNavigation>
        </section>
    )
}