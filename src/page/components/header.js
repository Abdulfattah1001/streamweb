import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styles from '../../styles/index/home.module.css'

export default function Header(props){
    let callbackFunction = props.props;
    return (
        <header className={styles.header}>
            <Avatar onClick={()=>{callbackFunction(false)}} />
            <div>
                <span>Stream</span>
            </div>

            <div>
                <Search color="action"/>
            </div>
        </header>
    )
}