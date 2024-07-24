import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styles from '../../styles/index/home.module.css'

export default function Header(props){
    let callbackFunction = props.callback;
    let title = props.title;
    return (
        <header className={styles.header}>
        
            <div className={styles.page_title}>
                <Avatar onClick={()=>{callbackFunction(false)}} />
                <span>{title}</span>
            </div>

            <div>
                <Search
                sx={
                    {
                        color:'white',
                        
                    }
                } color="action"/>
            </div>
        </header>
    )
}